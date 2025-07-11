import {
  Button,
  Image,
  Input,
  Form,
  Alert,
  Link,
  Tooltip,
  addToast,
} from "@heroui/react";
import React, { useRef, useState } from "react";
import { BsArrowRight, BsCopy } from "react-icons/bs";
import ConfettiBurst from "../animations/ConfettiBurst";
import { AnimatePresence } from "framer-motion";
import { authService } from "../../services/authService";

interface ShortLinkFormProps {
  formToggle: React.Dispatch<React.SetStateAction<number>>;
  isAuthenticated: boolean;
}

const ShortLinkForm = ({ formToggle, isAuthenticated }: ShortLinkFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [shortLink, setShortLink] = useState<string | "">("");
  const [copied, setCopied] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const copyLink = async (shortLink: string) => {
    console.log(shortLink);
    try {
      await navigator.clipboard.writeText(shortLink);
      setCopied(true);

      addToast({
        title: "Link Copied to clipboard",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
        variant: "bordered",
        color: "primary",
      });

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to copy!", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const originalUrl = formData.get("originalUrl");

    try {
      const user = authService.getCurrentUser();
      const userId = user ? user.id : null;

      const apiURL = import.meta.env.VITE_API_URL;

      const response = await fetch(`${apiURL}/links/shorten`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl, userId }),
      });
      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to fetch short link");
      }

      const data = await response.json();
      setShortLink(data.newUrl as string);

      addToast({
        title: "Short Link is created successfully.",
        timeout: 5000,
        shouldShowTimeoutProgress: true,
        variant: "solid",
        color: "success",
      });

      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);

      formRef.current?.reset();
    } catch (error) {
      if (error instanceof Error) {
        console.log(Error);
        setError(error.message);
        setTimeout(() => {
          setError("");
        }, 4000);
      } else {
        setError(
          "Unable to generate short link right now. Please try after some time"
        );
        setTimeout(() => {
          setError("");
        }, 4000);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full max-w-4xl bg-amber-50 dark:bg-gray-800 dark:border dark:border-gray-600 rounded-2xl p-4 md:p-6 gap-6 shadow-lg">
      <AnimatePresence>{showConfetti && <ConfettiBurst />}</AnimatePresence>

      <div className="relative flex flex-col md:flex-row justify-between items-center w-full gap-6">
        {/* Left Section */}
        <div className="w-full md:max-w-2xl space-y-12">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white">
            Shorten a long link
          </h4>

          <Form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>
            <Input
              type="url"
              name="originalUrl"
              label="Paste your long link here"
              labelPlacement="outside"
              placeholder="https://example.com/long-url"
              className="font-semibold"
              variant="faded"
              color="default"
              isRequired
            />
            <Button
              type="submit"
              color="primary"
              className="w-full md:max-w-xs font-bold"
              variant="flat"
              isLoading={isLoading}
            >
              Generate Short Link <BsArrowRight />
            </Button>
            {error && <Alert color="danger" title={error} />}
          </Form>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            alt="URL Shortener illustration"
            className="object-cover rounded-xl max-w-full h-auto"
            src="/url-shortener.svg"
            width={270}
          />
        </div>
      </div>

      {/* Short Link Display */}
      {shortLink && (
        <div className="w-full rounded-2xl p-4 md:p-6 space-y-6 bg-white dark:bg-gray-700 border-blue-600 dark:border-gray-600 border-1 shadow-md">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Your new short link:
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Link 
                  isExternal 
                  showAnchorIcon 
                  href={shortLink}
                  className="break-all text-sm sm:text-base"
                >
                  {shortLink}
                </Link>
                <Tooltip content="Copy link">
                  <Button
                    isDisabled={copied}
                    color="default"
                    size="sm"
                    onPress={() => copyLink(shortLink)}
                  >
                    <BsCopy className="w-4 h-4" /> Copy
                  </Button>
                </Tooltip>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-gray-300 dark:bg-gray-600" />
            <div className="lg:hidden w-full h-px bg-gray-300 dark:bg-gray-600" />

            <div className="flex justify-center">
              <Button color="primary" onPress={() => formToggle(2)}>
                Let's Create QR Code
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Alert
              className="mt-6"
              color="default"
              variant="solid"
              title="Copy your custom link and share it anywhere—your content, your way, anytime!"
            />
            {!isAuthenticated && (
              <Alert
                color="warning"
                variant="solid"
                title="If you want to save your data then please create a free account."
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortLinkForm;
