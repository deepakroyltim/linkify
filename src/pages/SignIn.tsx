import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Link,
  Divider,
} from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaPaperclip } from "react-icons/fa6";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

const SignIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Sign In Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <h1 className="flex justify-center items-center text-3xl font-bold">
                <FaPaperclip className="text-primary me-2" />
                <span className="text-primary">Li</span>
                <span>nki</span>
                <span className="text-primary">fy</span>
              </h1>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <h3 className="text-xl font-semibold">Sign In</h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                isRequired
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                variant="bordered"
                endContent={
                  <button type="button" onClick={toggleVisibility}>
                    {isVisible ? <BsEyeSlash /> : <BsEye />}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                isRequired
              />
              <div className="flex justify-between items-center">
                <Link href="#" size="sm">
                  Forgot password?
                </Link>
              </div>
              <Button color="primary" className="w-full" size="lg">
                Sign In
              </Button>
              <Divider />
              <div className="text-center">
                <span className="text-gray-600">Don't have an account? </span>
                <Link as={RouterLink} to="/signup" color="primary">
                  Sign up
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Right Column - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 items-center justify-center p-8">
        <div className="text-center text-white">
          <div className="mb-8">
            <FaPaperclip className="text-6xl mx-auto mb-4 opacity-20" />
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-amber-300">Li</span>
              <span>nki</span>
              <span className="text-amber-300">fy</span>
            </h1>
            <p className="text-xl opacity-90">
              Your all-in-one platform for branded links and QR codes
            </p>
          </div>
          <div className="space-y-4 opacity-80">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Shorten URLs instantly</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Generate QR codes</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Track your links</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;