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

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Sign Up Form */}
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
            <h2 className="text-2xl font-bold text-gray-900">Create account</h2>
            <p className="text-gray-600 mt-2">Join Linkify today</p>
          </div>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <h3 className="text-xl font-semibold">Sign Up</h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="text"
                  label="First Name"
                  placeholder="Enter first name"
                  variant="bordered"
                  isRequired
                />
                <Input
                  type="text"
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="bordered"
                  isRequired
                />
              </div>
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                isRequired
              />
              <Input
                label="Password"
                placeholder="Create password"
                variant="bordered"
                endContent={
                  <button type="button" onClick={toggleVisibility}>
                    {isVisible ? <BsEyeSlash /> : <BsEye />}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                isRequired
              />
              <Input
                label="Confirm Password"
                placeholder="Confirm your password"
                variant="bordered"
                endContent={
                  <button type="button" onClick={toggleConfirmVisibility}>
                    {isConfirmVisible ? <BsEyeSlash /> : <BsEye />}
                  </button>
                }
                type={isConfirmVisible ? "text" : "password"}
                isRequired
              />
              <Button color="primary" className="w-full" size="lg">
                Create Account
              </Button>
              <Divider />
              <div className="text-center">
                <span className="text-gray-600">Already have an account? </span>
                <Link as={RouterLink} to="/signin" color="primary">
                  Sign in
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Right Column - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-600 to-blue-700 items-center justify-center p-8">
        <div className="text-center text-white">
          <div className="mb-8">
            <FaPaperclip className="text-6xl mx-auto mb-4 opacity-20" />
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-amber-300">Li</span>
              <span>nki</span>
              <span className="text-amber-300">fy</span>
            </h1>
            <p className="text-xl opacity-90">
              Build meaningful connections with branded links
            </p>
          </div>
          <div className="space-y-4 opacity-80">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Free to get started</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Start creating instantly</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;