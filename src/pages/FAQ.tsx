import { Accordion, AccordionItem } from "@heroui/react";
import { FaCircleQuestion } from "react-icons/fa6";
import Layout from "../components/layout/Layout";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Linkify?",
      answer:
        "Linkify is a comprehensive platform that allows you to shorten long URLs and generate QR codes. It helps you create clean, professional links that are easy to share and track.",
    },
    {
      question: "Is Linkify free to use?",
      answer:
        "Yes! Linkify offers a free tier that includes basic URL shortening and QR code generation. We also offer premium features for users who need advanced analytics and customization options.",
    },
    {
      question: "How do I create a shortened link?",
      answer:
        "Simply paste your long URL into our shortener tool, and we'll generate a clean, shortened link for you instantly. You can also customize the link if you have an account.",
    },
    {
      question: "Can I track my link performance?",
      answer:
        "Yes! When you create an account, you can track clicks, view analytics, and monitor the performance of all your shortened links from your dashboard.",
    },
    {
      question: "Are QR codes free to generate?",
      answer:
        "Absolutely! You can generate unlimited QR codes for free. Each QR code can be downloaded as a high-quality PNG image for use in your marketing materials.",
    },
    {
      question: "How long do shortened links last?",
      answer:
        "Shortened links created with Linkify never expire. They will continue to work as long as the original URL is active and accessible.",
    },
    {
      question: "Can I customize my shortened links?",
      answer:
        "Yes! Registered users can create custom short links with meaningful names instead of random characters, making them more memorable and professional.",
    },
    {
      question: "Is there a limit to how many links I can create?",
      answer:
        "Free users can create up to 100 links per month. Premium users enjoy unlimited link creation along with advanced features and analytics.",
    },
    {
      question: "How secure are my links?",
      answer:
        "We take security seriously. All links are protected with enterprise-grade security measures, and we regularly monitor for malicious content to keep our platform safe.",
    },
    {
      question: "Can I delete my shortened links?",
      answer:
        "Yes! You can manage and delete your links anytime from your dashboard. Once deleted, the shortened link will no longer redirect to the original URL.",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <FaCircleQuestion className="text-4xl sm:text-6xl text-primary mx-auto mb-4 sm:mb-6" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Find answers to common questions about Linkify
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion variant="shadow">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                aria-label={faq.question}
                title={faq.question}
                className="text-left"
              >
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 text-center mt-6 sm:mt-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Can't find the answer you're looking for? We're here to help!
            </p>
            <p className="text-primary font-semibold">
              Contact us at: support@linkify.com
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
