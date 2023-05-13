import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import ServicesContent from "../../content/ServicesContent.json";
import ProductsContent from "../../content/ProductsContent.json";
import SolutionContent from "../../content/SolutionContent.json";
import OurGymContent from "../../content/OurGymContent.json";

const IntroBlock = lazy(() => import("../../shared/components/IntroBlock"));
const ProductsBlock = lazy(() => import("../../shared/components/ProductsBlock"));
const ServicesBlock = lazy(() => import("../../shared/components/ServicesBlock"));
const SolutionBlock = lazy(() => import("../../shared/components/SolutionBlock"));
const OurGymBlock = lazy(() => import("../../shared/components/OurGymBlock"));
const ScrollToTop = lazy(() => import("../../shared/common/ScrollToTop"));

const Home = () => {
  return (
    <>
      <IntroBlock
        title={IntroContent.title}
        button={IntroContent.button}
        id="intro"
      />
      <ProductsBlock
        title={ProductsContent.title}
        text={ProductsContent.text}
        section={ProductsContent.section}
        button={ProductsContent.button}
        id="products"
      />

      <ServicesBlock
        title={ServicesContent.title}
        section={ServicesContent.section}
        id="services"
      />
      <OurGymBlock
        title={OurGymContent.title}
        text={OurGymContent.text}
        id="gym"
      />
      <SolutionBlock
        type="up"
        title={SolutionContent.title}
        text={SolutionContent.text}
        section={SolutionContent.section}
        id="solution"
      />
      <ScrollToTop />
    </>
  );
};

export default Home;
