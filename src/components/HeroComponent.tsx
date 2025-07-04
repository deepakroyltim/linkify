import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,
} from "@heroui/react";
import { BsSend } from "react-icons/bs";

const HeroComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-10">
      <div className="flex flex-col justify-center w-full max-w-4xl items-center space-y-8 ">
        <h4 className="text-xl italic text-gray-700">
          Big Connections Start with a Click or a Scan
        </h4>
        <h1 className="text-4xl font-bold">Welcome to Linkify </h1>
        <h3 className="text-2xl text-center ">
          Your all-in-one platform to create, manage, and share branded links
          and QR Codes. Build meaningful connections with your
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
              src="/URL-Shortener-1.jpeg"
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
              src="/QR-Shortener-1.jpeg"
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
  );
};

export default HeroComponent;
