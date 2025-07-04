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
import ConfettiBurst from "./ConfettiBurst";
import { AnimatePresence } from "framer-motion";

interface QRCodeFormProps {
  formToggle: React.Dispatch<React.SetStateAction<number>>;
}

const QRCodeForm = ({ formToggle }: QRCodeFormProps) => {
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

    try {
      const response = await fetch(
        `http://localhost:5172/generateqr?originalUrl=${originalUrl}`
      );
      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to generate QR Code");
      }

      const data = await response.json();
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
    <div className="relative flex flex-col items-center w-full max-w-4xl bg-amber-50 rounded-2xl p-6 gap-6 shadow-lg">
      <AnimatePresence>{showConfetti && <ConfettiBurst />}</AnimatePresence>

      <div className="relative flex flex-col md:flex-row justify-between items-center w-full gap-6">
        {/* Left Section */}
        <div className="w-full md:max-w-2xl space-y-12">
          <h4 className="text-xl font-bold text-gray-800">Create a QR Code</h4>

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
        <div className="w-full bg-white border-blue-600 border-1 shadow-md rounded-2xl p-6 space-y-10">
          <h2 className="text-lg font-semibold mb-2">Your new QR Code:</h2>

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
            <div className="hidden md:block w-px h-12 bg-gray-300" />

            {/* Right Section: Create Short Link Button */}
            <div className="flex-1 flex justify-center">
              <Button color="primary" onPress={() => formToggle(1)}>
                Let's Create Short Link
              </Button>
            </div>
          </div>

          <Alert
            className="mt-6"
            color="default"
            title="Copy your custom link and share it anywhere—your content, your way, anytime!"
          />
        </div>
      )}
    </div>
  );
};

export default QRCodeForm;
