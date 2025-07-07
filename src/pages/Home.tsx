import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Spinner } from "@heroui/react";

const AnimatedBackground = lazy(() => import("../components/animations/Animation"));
const AnimatedBackgroundTwo = lazy(() => import("../components/animations/AnimationTwo"));
const HeroComponent = lazy(() => import("../components/HeroComponent"));
const FormComponent = lazy(() => import("../components/forms/FormComponent"));

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
        <Suspense fallback={<div className="h-20" />}>
          <AnimatedBackground />
        </Suspense>
        <Suspense fallback={<div className="flex justify-center py-20"><Spinner size="lg" /></div>}>
          <HeroComponent />
        </Suspense>
      </section>
      <section id="form-section" className="w-full bg-blue-950 dark:bg-gray-800 py-20">
        <Suspense fallback={<div className="h-20" />}>
          <AnimatedBackgroundTwo />
        </Suspense>
        <Suspense fallback={<div className="flex justify-center py-20"><Spinner size="lg" /></div>}>
          <FormComponent />
        </Suspense>
      </section>
    </Layout>
  );
};

export default Home;