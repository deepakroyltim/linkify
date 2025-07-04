import Layout from "./components/Layout";

import AnimatedBackground from "./components/Animation";
import AnimatedBackgroundTwo from "./components/AnimationTwo";
import HeroComponent from "./components/HeroComponent";
import FormComponent from "./components/FormComponent";

function App() {
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
}

export default App;
