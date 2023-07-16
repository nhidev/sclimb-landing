import { Row, Col, Image } from "antd";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import Container from "../../common/Container";
import { ProductsBlockSection, Content, Title, MinTitle, Para, MinPara } from "./styles";
import { Zoom } from "react-awesome-reveal";
interface ProductsBlockProps {
  title: string;
  text: string;
  section: any;
  button: string;
  delay?: any
  id: string;
  t: any;
};

export const ProductsBlock = ({ title, text, section, button, delay, id, t }: ProductsBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <ProductsBlockSection id={id}>
      <Container>
        <Row justify="center" align="middle" id={id}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Content>
              <Title>{t(title)}</Title>
              {/* {button && (
                <Button name="submit" type="outline" color="#000" onClick={() => scrollTo("products")}>
                  {t(button)}
                </Button>
              )} */}
            </Content>
            <Para>{t(text)}</Para>
            <Row gutter={[24, 24]} justify="center">
              {typeof section === "object" &&
                section.map((item: any, id: number) => {
                  return (
                    <Col key={id} xs={20} sm={12} md={8} lg={6}>
                      <Zoom delay={delay}>
                        <Image src={item.icon} height={250} />
                        <MinTitle>{t(item.title)}</MinTitle>
                        <MinPara>{t(item.price)}</MinPara>
                      </Zoom>
                    </Col>
                  );
                })}
            </Row>

          </Col>
        </Row >
      </Container >
    </ProductsBlockSection >
  );
};

export default withTranslation()(ProductsBlock);
