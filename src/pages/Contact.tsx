import { Button, Input, Textarea } from "@heroui/react";
import { FaEnvelope, FaPaperPlane, FaComments } from "react-icons/fa6";
import { useState } from "react";
import Layout from "../components/layout/Layout";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      alert("Thank you for your message! We'll get back to you soon.");
    }, 2000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <FaEnvelope className="text-4xl sm:text-6xl text-primary mx-auto mb-4 sm:mb-6" />
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <FaComments className="text-primary text-2xl mr-3" />
                <h2 className="text-2xl font-bold">Send us a Message</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We'd love to hear from you! Whether you have questions,
                feedback, or need support, drop us a message and we'll get back
                to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your first name"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    type="text"
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your last name"
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
                  type="text"
                  name="subject"
                  label="Subject"
                  placeholder="What's this about?"
                  variant="bordered"
                  isRequired
                />
                <Textarea
                  name="message"
                  label="Message"
                  placeholder="Tell us more about your question or feedback..."
                  variant="bordered"
                  minRows={4}
                  isRequired
                />
                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  className="w-full"
                  isLoading={isLoading}
                  endContent={!isLoading && <FaPaperPlane />}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Graphics and Info */}
            <div className="flex flex-col items-center space-y-6 sm:space-y-8">
              <div className="text-center">
                <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-4xl sm:text-6xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">We're Here to Help!</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our support team is dedicated to providing you with the best
                  experience possible. From technical questions to feature
                  requests, we're always ready to assist.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 text-center">
                <h4 className="font-bold text-lg mb-2">
                  Quick Response Guaranteed
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We respond to all messages within 24 hours. For urgent
                  matters, reach us at <strong>support@linkify.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
