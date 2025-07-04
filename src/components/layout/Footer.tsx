import { Divider, Link } from "@heroui/react";
import { FaPaperclip, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const FooterComponent = () => {
  return (
    <footer className="flex flex-col items-center w-full bg-amber-50 p-6 py-16">
      <div className="flex flex-col max-w-4xl w-full">
        <Divider className="shadow-lg" />
        <div className="flex justify-between items-center mt-4">
          <h1 className="flex items-center text-3xl font-bold space-x-0">
            <FaPaperclip className="text-primary me-2" />
            <span className="text-primary">Li</span>
            <span>nki</span>
            <span className="text-primary">fy</span>
          </h1>
          <h1 className="font-semibold text-lg text-gray-700">
            Built with React & Node.js
          </h1>
        </div>

        <div className="flex flex-col items-center mt-6 space-y-2">
          <p className="text-sm text-gray-600">
            Made with ❤️ to simplify your link sharing experience.
          </p>
          <div className="flex space-x-4">
            <Link href="https://github.com/yourusername">
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com/in/yourprofile">
              <FaLinkedin className="h-5 w-5" />
            </Link>
            <Link href=" https://twitter.com/yourhandle">
              <FaTwitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
