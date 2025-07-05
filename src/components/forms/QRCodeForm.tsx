import {
  Button,
  Image,
  Input,
  Form,
  Alert,
  Tooltip,
  addToast,
} from "@heroui/react";
import React, { useRef, useState } from "react";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import ConfettiBurst from "../animations/ConfettiBurst";
import { AnimatePresence } from "framer-motion";
import { authService } from "../../services/authService";

interface QRCodeFormProps {
  formToggle: React.Dispatch<React.SetStateAction<number>>;
  isAuthenticated: boolean;
}

const QRCodeForm = ({ formToggle, isAuthenticated }: QRCodeFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [qrCode, setQRCode] = useState<string | "">("");
  const [showConfetti, setShowConfetti] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const downloadQRCode = () => {
    if (!qrCode) return;

    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qr-code.png"; // You can customize the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const originalUrl = formData.get("originalUrl");

    const apiURL = import.meta.env.VITE_API_QR_GENERATOR;

    try {
      const user = authService.getCurrentUser();
      const userId = user ? user.id : null;

      const response = await fetch(`${apiURL}/generateqr`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl, userId }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.error || data.message || "Failed to generate QR Code"
        );
      }

      setQRCode(data.rawCode as string);

      addToast({
        title: "QR Code is created successfully.",
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
          "Unable to generate QR Code right now. Please try after some time"
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
    <div className="relative flex flex-col items-center w-full max-w-4xl bg-amber-50 dark:bg-gray-800 dark:border dark:border-gray-600 rounded-2xl p-6 gap-6 shadow-lg">
      <AnimatePresence>{showConfetti && <ConfettiBurst />}</AnimatePresence>

      <div className="relative flex flex-col md:flex-row justify-between items-center w-full gap-6">
        {/* Left Section */}
        <div className="w-full md:max-w-2xl space-y-12">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white">
            Create a QR Code
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
              Generate QR Code <BsArrowRight />
            </Button>
            {error && <Alert color="danger" title={error} />}
          </Form>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-auto">
          <Image
            alt="QR Code Generator illustration"
            className="object-cover rounded-xl"
            src="/qr-generator.svg"
            width={270}
          />
        </div>
      </div>

      {/* QR Code Display */}
      {qrCode && (
        <div className="w-full bg-white dark:bg-gray-700 border-blue-600 dark:border-gray-600 border-1 shadow-md rounded-2xl p-6 space-y-10">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Your new QR Code:
          </h2>

          <div className="flex md:flex-row justify-between items-center">
            {/* Left Section: QR Code and Download Button Side-by-Side */}
            <div className="flex-1 flex justify-center">
              <div className="flex items-center space-x-6">
                <Image
                  src={qrCode}
                  alt="QR Code"
                  className="w-64 h-64"
                  isBlurred
                />
                <Tooltip content="Copy link">
                  <Button
                    color="default"
                    className="max-w-xs"
                    size="sm"
                    onPress={() => downloadQRCode()}
                  >
                    <BsDownload className="w-5 h-5" />
                  </Button>
                </Tooltip>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-gray-300 dark:bg-gray-600" />

            {/* Right Section: Create Short Link Button */}
            <div className="flex-1 flex justify-center">
              <Button color="primary" onPress={() => formToggle(1)}>
                Let's Create Short Link
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Alert
              className="mt-6"
              color="default"
              variant="solid"
              title="Download your QR COde and share it anywhere—your content, your way, anytime!"
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

export default QRCodeForm;
