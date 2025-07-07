import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@heroui/react";
import { BsSend, BsBook, BsArrowRight } from "react-icons/bs";

const HeroComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-10 px-4 sm:px-6">
      <div className="flex flex-col justify-center w-full max-w-4xl items-center space-y-6 sm:space-y-8 text-center">
        <h4 className="text-lg sm:text-xl italic text-gray-700 dark:text-gray-300">
          Big Connections Start with a Click or a Scan
        </h4>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Welcome to Linkify
        </h1>
        <h3 className="text-base sm:text-lg lg:text-xl text-center text-foreground/80 max-w-3xl">
          Your all-in-one platform to create, manage, and share branded links
          and QR Codes. Build meaningful connections with your
          audience—anywhere, anytime—with Linkify's unified toolkit.
        </h3>
        <Button
          size="lg"
          color="primary"
          className="w-full sm:w-auto"
          endContent={<BsSend />}
          onPress={() => {
            const element = document.getElementById("form-section");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Let's Start For Free
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 w-full max-w-6xl">
        <Card className="w-full max-w-sm bg-blue-950 dark:bg-gray-800 text-white p-4 sm:p-6">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <h4 className="font-bold text-lg sm:text-xl">URL Shortener</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-full"
              src="/URL-Shortener-1.jpeg"
            />
          </CardBody>
          <CardFooter className="flex-col gap-2">
            <Button
              color="default"
              className="w-full rounded-full"
              endContent={<BsArrowRight />}
              onPress={() => {
                const element = document.getElementById("form-section");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  // Set form to URL shortener (index 1)
                  setTimeout(() => {
                    const formToggleBtn = document.querySelector(
                      '[data-form="1"]'
                    ) as HTMLButtonElement;
                    if (formToggleBtn) formToggleBtn.click();
                  }, 500);
                }
              }}
            >
              Start Shortening
            </Button>
            <Button
              color="default"
              className="w-full rounded-full"
              endContent={<BsBook />}
              onPress={() => (window.location.href = "/guide")}
            >
              Learn How
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full max-w-sm bg-blue-950 dark:bg-gray-800 text-white p-4 sm:p-6">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <h4 className="font-bold text-lg sm:text-xl">QR Code</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-full "
              src="/QR-Shortener-1.jpeg"
            />
          </CardBody>
          <CardFooter className="flex-col gap-2">
            <Button
              color="default"
              className="w-full rounded-full"
              endContent={<BsArrowRight />}
              onPress={() => {
                const element = document.getElementById("form-section");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  // Set form to QR generator (index 2)
                  setTimeout(() => {
                    const formToggleBtn = document.querySelector(
                      '[data-form="2"]'
                    ) as HTMLButtonElement;
                    if (formToggleBtn) formToggleBtn.click();
                  }, 500);
                }
              }}
            >
              Generate QR Code
            </Button>
            <Button
              color="default"
              className="w-full rounded-full"
              endContent={<BsBook />}
              onPress={() => (window.location.href = "/guide")}
            >
              Learn How
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default HeroComponent;
