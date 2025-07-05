import { Button } from "@heroui/react";
import { FaRocket, FaBell, FaUser, FaShield } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";
import Layout from "../components/layout/Layout";

const Settings = () => {
  const upcomingFeatures = [
    {
      icon: FaUser,
      title: "Profile Management",
      description: "Update your personal information and preferences",
    },
    {
      icon: FaBell,
      title: "Notifications",
      description: "Customize email and push notification settings",
    },
    {
      icon: FaShield,
      title: "Privacy & Security",
      description: "Manage your account security and privacy options",
    },
    {
      icon: FaRocket,
      title: "Advanced Features",
      description: "Access premium tools and analytics",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center">
              <FaCog className="text-6xl text-primary animate-spin-slow" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Settings</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're working hard to bring you amazing customization options!
            </p>
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full inline-block font-semibold">
              Under Construction
            </div>
          </div>

          {/* Coming Soon Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Coming Soon</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <feature.icon className="text-3xl text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Stay Tuned!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're constantly improving Linkify to give you the best
              experience. These exciting features will be available soon!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                color="primary"
                onPress={() => (window.location.href = "/")}
              >
                Back to Home
              </Button>
              <Button
                variant="bordered"
                color="primary"
                onPress={() => (window.location.href = "/contact")}
              >
                Request Feature
              </Button>
            </div>
          </div>

          {/* Fun Message */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Have suggestions? We'd love to hear from you!
              <br />
              Great things take time, and we're building something amazing!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
