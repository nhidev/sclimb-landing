import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import ProductsContent from "../../content/ProductsContent.json";
import SolutionContent from "../../content/SolutionContent.json";

const IntroBlock = lazy(() => import("../../shared/components/IntroBlock"));
const ProductsBlock = lazy(() => import("../../shared/components/ProductsBlock"));
const SolutionBlock = lazy(() => import("../../shared/components/SolutionBlock"));
declare global { namespace JSX {
    interface IntrinsicElements {
      "livere-comment": any;
    }
  }
}
const About = () => {
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
 
      <SolutionBlock
        title={SolutionContent.title}
        text={SolutionContent.text}
        section={SolutionContent.section}
        id="solution"
      />
     <livere-comment client-id="9TdXiy9Vk9NTePPebJYP"></livere-comment>
    
    </>
  );
};

export default About;
