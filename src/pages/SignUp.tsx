import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Link,
  Divider,
  Tooltip,
  Alert,
  addToast,
} from "@heroui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FaPaperclip, FaGoogle, FaGithub } from "react-icons/fa6";
import { BsEye, BsEyeSlash, BsSun, BsMoon, BsHouse } from "react-icons/bs";
import { useState } from "react";
import { authService } from "../services/authService";
import { useTheme } from "../hooks/useTheme";
import AuthBranding from "../components/auth/AuthBranding";
import type { SignUpData } from "../types/User";

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const userData: SignUpData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    if (userData.password !== userData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await authService.signUp(userData);

      if (response.success) {
        addToast({
          title: "Account created successfully!",
          description: "Welcome to Linkify. Please verify your email.",
          color: "success",
          timeout: 5000,
        });
        navigate('/');
      } else {
        setError(response.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(`Error message: ${error.message}`);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-gray-900">
        <div className="w-full max-w-md">
          {/* Fixed positioned buttons */}
          <Button
            isIconOnly
            variant="light"
            onPress={() => navigate('/')}
            aria-label="Go to home"
            className="fixed top-4 left-4 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
          >
            <BsHouse className="text-xl" />
          </Button>
          <Button
            isIconOnly
            variant="light"
            onPress={toggleTheme}
            aria-label="Toggle theme"
            className="fixed top-4 right-4 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
          >
            {theme === 'light' ? <BsMoon className="text-xl" /> : <BsSun className="text-xl" />}
          </Button>
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <h1 className="flex justify-center items-center text-3xl font-bold">
                <FaPaperclip className="text-primary me-2" />
                <span className="text-primary">Li</span>
                <span>nki</span>
                <span className="text-primary">fy</span>
              </h1>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create account</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Join Linkify today</p>
          </div>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <h3 className="text-xl font-semibold">Sign Up</h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    name="firstName"
                    label="First Name"
                    placeholder="Enter first name"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    type="text"
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter last name"
                    variant="bordered"
                    isRequired
                  />
                </div>
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  isRequired
                />
                <Input
                  name="password"
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
                  name="confirmPassword"
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
                {error && <Alert color="danger" title={error} />}
                <Button
                  type="submit"
                  color="primary"
                  className="w-full"
                  size="lg"
                  isLoading={isLoading}
                >
                  Create Account
                </Button>
              </form>
              <Divider className="my-4" />
              <div className="space-y-3">
                <Tooltip content="Feature coming soon">
                  <Button
                    variant="bordered"
                    className="w-full"
                    startContent={<FaGoogle className="text-red-500" />}
                  >
                    Sign up with Google
                  </Button>
                </Tooltip>
                <Tooltip content="Feature coming soon">
                  <Button
                    variant="bordered"
                    className="w-full"
                    startContent={<FaGithub />}
                  >
                    Sign up with GitHub
                  </Button>
                </Tooltip>
              </div>
              <Divider className="my-4" />
              <div className="text-center">
                <span className="text-gray-600 dark:text-gray-300">Already have an account? </span>
                <Link as={RouterLink} to="/signin" color="primary">
                  Sign in
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Right Column - Branding */}
      <AuthBranding
        title="Join Linkify"
        subtitle="Build meaningful connections with branded links"
        features={[
          "Free to get started",
          "No credit card required",
          "Start creating instantly"
        ]}
      />
    </div>
  );
};

export default SignUp;
