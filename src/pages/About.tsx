import { FaPaperclip, FaRocket, FaUsers, FaShield } from "react-icons/fa6";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-4 sm:mb-6">
              <FaPaperclip className="text-4xl sm:text-6xl text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Linkify</h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Your all-in-one platform for creating, managing, and sharing
              branded links and QR codes
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At Linkify, we believe that every connection matters. Our mission
              is to simplify the way you share content by providing powerful
              tools to shorten URLs and generate QR codes. We help individuals
              and businesses build meaningful connections with their audience
              through clean, trackable, and professional links.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm">
              <FaRocket className="text-3xl text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fast & Reliable</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Lightning-fast URL shortening with 99.9% uptime guarantee
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm">
              <FaUsers className="text-3xl text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">User-Friendly</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Intuitive interface designed for both beginners and
                professionals
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm">
              <FaShield className="text-3xl text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Enterprise-grade security to protect your links and data
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Founded in 2024, Linkify was born from the need to make link
              sharing more efficient and professional. We noticed that long,
              complex URLs were hindering communication and decided to create a
              solution that not only shortens links but also provides valuable
              insights and customization options.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Today, Linkify serves thousands of users worldwide, from
              individual content creators to large enterprises, helping them
              streamline their digital communication and track their link
              performance with ease.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
