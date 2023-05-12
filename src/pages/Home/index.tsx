import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import ServicesContent from "../../content/ServicesContent.json";
import ProductsContent from "../../content/ProductsContent.json";
// import ContactContent from "../../content/ContactContent.json";
import SolutionContent from "../../content/SolutionContent.json";

// const Contact = lazy(() => import("../../shared/components/ContactForm"));
const IntroBlock = lazy(() => import("../../shared/components/IntroBlock"));
const ProductsBlock = lazy(() => import("../../shared/components/ProductsBlock"));
const ServicesBlock = lazy(() => import("../../shared/components/ServicesBlock"));
const SolutionBlock = lazy(() => import("../../shared/components/SolutionBlock"));
const ScrollToTop = lazy(() => import("../../shared/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../shared/components/ContentBlock"));

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
      {/*
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      /> */}
      <SolutionBlock
        type="up"
        title={SolutionContent.title}
        text={SolutionContent.text}
        section={SolutionContent.section}
        id="solution"
      />

      {/* <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        /> */}

      <ScrollToTop />
    </>
  );
};

export default Home;
