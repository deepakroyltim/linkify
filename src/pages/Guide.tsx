import {
  FaBookOpen,
  FaLink,
  FaQrcode,
  FaEye,
  FaDownload,
  FaUserPlus,
} from "react-icons/fa6";
import Layout from "../components/layout/Layout";

const Guide = () => {
  const steps = [
    {
      icon: FaUserPlus,
      title: "Create Your Account",
      description:
        "Sign up for a free Linkify account to access all features and track your links.",
      details: [
        "Click 'Sign Up' in the top navigation",
        "Fill in your basic information",
        "Verify your email address",
        "Start creating links immediately",
      ],
    },
    {
      icon: FaLink,
      title: "Shorten Your First URL",
      description:
        "Transform long, complex URLs into clean, shareable short links.",
      details: [
        "Navigate to the URL Shortener section",
        "Paste your long URL in the input field",
        "Click 'Generate Short Link'",
        "Copy your new shortened URL",
      ],
    },
    {
      icon: FaQrcode,
      title: "Generate QR Codes",
      description:
        "Create scannable QR codes for any URL to bridge digital and physical sharing.",
      details: [
        "Switch to the QR Code Generator tab",
        "Enter the URL you want to convert",
        "Click 'Generate QR Code'",
        "Preview your QR code instantly",
      ],
    },
    {
      icon: FaDownload,
      title: "Download & Share",
      description:
        "Save your QR codes as high-quality images for use in marketing materials.",
      details: [
        "Click the download button next to your QR code",
        "Choose your preferred image format",
        "Save to your device",
        "Use in presentations, flyers, or digital content",
      ],
    },
    {
      icon: FaEye,
      title: "Track Performance",
      description:
        "Monitor your link clicks and analyze performance from your personal dashboard.",
      details: [
        "Access your dashboard from the user menu",
        "View all your created links",
        "Check click statistics and analytics",
        "Manage and organize your links",
      ],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <FaBookOpen className="text-6xl text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">How to Use Linkify</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Follow this step-by-step guide to master all Linkify features
            </p>
          </div>

          {/* Vertical Stepper */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Step Circle */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary rounded-full text-white shadow-lg">
                  <step.icon className="text-2xl" />
                </div>

                {/* Step Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full mr-4">
                        Step {index + 1}
                      </span>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of users who trust Linkify for their link
              management needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="bg-primary text-white px-6 py-3 rounded-2xl font-semibold hover:bg-primary-600 transition-colors"
                onClick={() => {
                  const element = document.getElementById("form-section");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/";
                  }
                }}
              >
                Start Creating Links
              </button>
              <button
                className="border border-primary text-primary px-6 py-3 rounded-2xl font-semibold hover:bg-primary hover:text-white transition-colors"
                onClick={() => (window.location.href = "/signup")}
              >
                Create Free Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Guide;
