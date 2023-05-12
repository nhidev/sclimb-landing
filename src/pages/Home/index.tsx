import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import ServicesContent from "../../content/ServicesContent.json";
import ProductsContent from "../../content/ProductsContent.json";
import SolutionContent from "../../content/SolutionContent.json";

const IntroBlock = lazy(() => import("../../shared/components/IntroBlock"));
const ProductsBlock = lazy(() => import("../../shared/components/ProductsBlock"));
const ServicesBlock = lazy(() => import("../../shared/components/ServicesBlock"));
const SolutionBlock = lazy(() => import("../../shared/components/SolutionBlock"));
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
        section={ProductsContent.section}
        button={ProductsContent.button}
        id="products"
      />
      <ServicesBlock
        title={ServicesContent.title}
        section={ServicesContent.section}
        id="services"
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
