import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,
  Input,
} from "@heroui/react";
import Layout from "./components/Layout";
import { BsSend, BsQrCode, BsLink, BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import AnimatedBackground from "./components/Animation";
import AnimatedBackgroundTwo from "./components/AnimationTwo";

function App() {
  const [activeForm, setActiiveForm] = useState<number>(1);
  return (
    <Layout>
      <section className="w-full bg-amber-50 py-6">
        <AnimatedBackground />
        <div className="flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col justify-center w-full max-w-4xl items-center space-y-8 ">
            <h4 className="text-xl italic text-gray-700">
              Big Connections Start with a Click or a Scan
            </h4>
            <h1 className="text-4xl font-bold">Welcome to Linkify </h1>
            <h3 className="text-2xl text-center ">
              Your all-in-one platform to create, manage, and share branded
              links and QR Codes. Build meaningful connections with your
              audience—anywhere, anytime—with Linkify's unified toolkit.
            </h3>
            <Button size="lg" color="primary" endContent={<BsSend />}>
              Let's Start For Free
            </Button>
          </div>
          <div className="flex justify-center gap-8">
            <Card className="py-4 bg-blue-950 text-white p-6">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <h4 className="font-bold text-large">URL Shortener</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="http://localhost:5174/URL-Shortener-1.jpeg"
                  width={270}
                />
              </CardBody>
              <CardFooter>
                <Button
                  as={Link}
                  href="#"
                  color="default"
                  className="w-full rounded-full"
                  showAnchorIcon
                >
                  Let's Create
                </Button>
              </CardFooter>
            </Card>
            <Card className="py-4 bg-blue-950 text-white p-6">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <h4 className="font-bold text-large">QR Code</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="http://localhost:5174/QR-Shortener-1.jpeg"
                  width={270}
                />
              </CardBody>
              <CardFooter>
                <Button
                  as={Link}
                  href="#"
                  color="default"
                  className="w-full rounded-full"
                  showAnchorIcon
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full bg-blue-950 py-20">
        <AnimatedBackgroundTwo />
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="max-w-4xl space-x-6 ">
            <Button
              startContent={<BsLink />}
              size="lg"
              variant="shadow"
              onPress={() => setActiiveForm(1)}
              color={activeForm === 1 ? "primary" : "default"}
              aria-pressed={activeForm === 1}
            >
              Short Link
            </Button>
            <Button
              startContent={<BsQrCode />}
              size="lg"
              variant="shadow"
              onPress={() => setActiiveForm(2)}
              color={activeForm === 2 ? "primary" : "default"}
              aria-pressed={activeForm === 2}
            >
              QR Code
            </Button>
          </div>
          {activeForm === 1 && (
            <div className="flex justify-between items-center w-full max-w-4xl bg-amber-50 rounded-2xl  p-6 gap-6 ">
              <div className="w-full max-w-4xl space-y-16">
                <h4 className="text-xl font-semibold text-pretty">
                  Shorten a long link
                </h4>
                <Input
                  label="Paste your long link here"
                  labelPlacement="outside"
                  placeholder="https://example.com/long-url"
                  className="font-semibold border-2xl rounded-2xl"
                  color="default"
                />
                <Button
                  color="primary"
                  className="max-w-xs font-bold"
                  variant="flat"
                >
                  Get your link here <BsArrowRight />
                </Button>
              </div>
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="http://localhost:5174/URL-Shortener-1.jpeg"
                width={270}
              />
            </div>
          )}

          {activeForm === 2 && (
            <div className="flex justify-between items-center w-full max-w-4xl bg-amber-50 rounded-2xl  p-6 gap-6 ">
              <div className="w-full max-w-4xl space-y-16">
                <h4 className="text-xl font-semibold text-pretty">
                  Create a QR Code
                </h4>
                <Input
                  label="Enter your QR Code destination"
                  labelPlacement="outside"
                  placeholder="https://example.com/long-url"
                  className="font-semibold"
                />
                <Button
                  color="primary"
                  className="max-w-xs font-bold"
                  variant="flat"
                >
                  Get your QA Code here <BsArrowRight />
                </Button>
              </div>
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="http://localhost:5174/QR-Shortener-1.jpeg"
                width={270}
              />
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default App;
