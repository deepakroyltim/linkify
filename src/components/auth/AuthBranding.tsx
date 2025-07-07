import { FaPaperclip } from "react-icons/fa6";

interface AuthBrandingProps {
  subtitle: string;
  features: string[];
}

const AuthBranding = ({ subtitle, features }: AuthBrandingProps) => {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-gray-700 dark:to-gray-800 items-center justify-center p-8">
      <div className="text-center text-white">
        <div className="mb-8">
          <FaPaperclip className="text-6xl mx-auto mb-4 opacity-20" />
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-amber-300 dark:text-blue-300">Li</span>
            <span>nki</span>
            <span className="text-amber-300 dark:text-blue-300">fy</span>
          </h1>
          <p className="text-xl opacity-90">{subtitle}</p>
        </div>
        <div className="space-y-4 opacity-80">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthBranding;