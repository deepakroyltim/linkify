import { Button } from "@heroui/react";
import { FaHeart, FaCheck, FaGift, FaIndianRupeeSign } from "react-icons/fa6";
import Layout from "../components/layout/Layout";

const Pricing = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need is completely free. Forever.
            </p>
          </div>

          {/* Free Plan */}
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-12 border-2 border-primary">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Free Forever</h2>
              <div className="flex justify-center items-center text-5xl space-x-2 text-primary my-4">
                <FaIndianRupeeSign className="text-5xl" />
                <span>0</span>
              </div>

              <p className="text-gray-600 dark:text-gray-300">
                All features included, no hidden costs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-green-500 flex-shrink-0" />
                  <span>Unlimited URL shortening</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-green-500 flex-shrink-0" />
                  <span>Unlimited QR code generation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-green-500 flex-shrink-0" />
                  <span>Custom short links</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-green-500 flex-shrink-0" />
                  <span>Link analytics & tracking</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-green-500 flex-shrink-0" />
                  <span>High-quality QR code downloads</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-green-500 flex-shrink-0" />
                  <span>Personal dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-green-500 flex-shrink-0" />
                  <span>No expiration dates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-green-500 flex-shrink-0" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                color="primary"
                size="lg"
                onPress={() => {
                  const element = document.getElementById("form-section");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/";
                  }
                }}
              >
                Get Started Now
              </Button>
            </div>
          </div>

          {/* Why Free Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-12 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Why is Linkify Free?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center mb-6">
              We believe that powerful tools for link sharing and QR code
              generation should be accessible to everyone. Linkify is our
              contribution to the open web, helping individuals and businesses
              connect more effectively without financial barriers.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
              Our mission is to democratize digital communication tools and
              support the global community in building better connections
              online.
            </p>
          </div>

          {/* Donation Section */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-purple-900 rounded-lg p-8 text-center shadow-sm">
            <FaHeart className="text-4xl text-pink-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Support Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Love using Linkify? Help us keep it free for everyone! Your
              donations help us maintain our servers, develop new features, and
              continue providing this service to users worldwide.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button color="secondary" variant="bordered">
                <FaGift className="mr-2" />
                $5
              </Button>
              <Button color="secondary" variant="bordered">
                <FaGift className="mr-2" />
                $10
              </Button>
              <Button color="secondary" variant="bordered">
                <FaGift className="mr-2" />
                $25
              </Button>
              <Button color="secondary" variant="bordered">
                <FaGift className="mr-2" />
                Custom Amount
              </Button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              All donations are voluntary and help us keep Linkify free for
              everyone. Thank you for your support! ❤️
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
