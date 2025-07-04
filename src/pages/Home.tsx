import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AnimatedBackground from "../components/animations/Animation";
import AnimatedBackgroundTwo from "../components/animations/AnimationTwo";
import HeroComponent from "../components/HeroComponent";
import FormComponent from "../components/forms/FormComponent";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#form-section') {
      setTimeout(() => {
        const element = document.getElementById('form-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <Layout>
      <section className="w-full bg-amber-50 dark:bg-gray-900 py-6">
        <AnimatedBackground />
        <HeroComponent />
      </section>
      <section id="form-section" className="w-full bg-blue-950 dark:bg-gray-800 py-20">
        <AnimatedBackgroundTwo />
        <FormComponent />
      </section>
    </Layout>
  );
};

export default Home;