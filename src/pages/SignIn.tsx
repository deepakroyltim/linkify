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
import type { SignInData } from "../types/User";

const SignIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const credentials: SignInData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      const response = await authService.signIn(credentials);

      if (response.success) {
        addToast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
          color: "success",
          timeout: 3000,
        });
        navigate('/');
      } else {
        setError(response.message);
      }
    } catch (error: unknown) {
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
      {/* Left Column - Sign In Form */}
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Sign in to your account</p>
          </div>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <h3 className="text-xl font-semibold">Sign In</h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <form onSubmit={handleSignIn} className="space-y-4">
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  isRequired
                  classNames={{
                    input: "text-sm",
                    inputWrapper: "border-gray-300 hover:border-primary focus-within:border-primary"
                  }}
                />
                <Input
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  variant="bordered"
                  endContent={
                    <button 
                      type="button" 
                      onClick={toggleVisibility}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {isVisible ? <BsEyeSlash /> : <BsEye />}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  isRequired
                  classNames={{
                    input: "text-sm",
                    inputWrapper: "border-gray-300 hover:border-primary focus-within:border-primary"
                  }}
                />
                <div className="flex justify-between items-center">
                  <Link href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
                {error && <Alert color="danger" title={error} />}
                <Button
                  type="submit"
                  color="primary"
                  className="w-full font-semibold"
                  size="lg"
                  isLoading={isLoading}
                  radius="md"
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>
              <Divider className="my-4" />
              <div className="space-y-3">
                <Tooltip content="Feature coming soon" placement="top">
                  <Button
                    variant="bordered"
                    className="w-full hover:bg-red-50 transition-colors"
                    startContent={<FaGoogle className="text-red-500" />}
                    radius="md"
                  >
                    Continue with Google
                  </Button>
                </Tooltip>
                <Tooltip content="Feature coming soon" placement="top">
                  <Button
                    variant="bordered"
                    className="w-full hover:bg-gray-50 transition-colors"
                    startContent={<FaGithub />}
                    radius="md"
                  >
                    Continue with GitHub
                  </Button>
                </Tooltip>
              </div>
              <Divider className="my-4" />
              <div className="text-center">
                <span className="text-gray-600 dark:text-gray-300">Don't have an account? </span>
                <Link as={RouterLink} to="/signup" color="primary">
                  Sign up
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Right Column - Branding */}
      <AuthBranding
        title="Welcome Back"
        subtitle="Your all-in-one platform for branded links and QR codes"
        features={[
          "Shorten URLs instantly",
          "Generate QR codes",
          "Track your links"
        ]}
      />
    </div>
  );
};

export default SignIn;
