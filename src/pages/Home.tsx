import Layout from "../components/layout/Layout";
import AnimatedBackground from "../components/animations/Animation";
import AnimatedBackgroundTwo from "../components/animations/AnimationTwo";
import HeroComponent from "../components/HeroComponent";
import FormComponent from "../components/forms/FormComponent";

const Home = () => {
  return (
    <Layout>
      <section className="w-full bg-amber-50 py-6">
        <AnimatedBackground />
        <HeroComponent />
      </section>
      <section className="w-full bg-blue-950 py-20">
        <AnimatedBackgroundTwo />
        <FormComponent />
      </section>
    </Layout>
  );
};

export default Home;