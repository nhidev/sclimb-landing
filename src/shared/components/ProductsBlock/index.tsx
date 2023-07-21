import { Row, Col, Image } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { ProductsBlockSection, Content, Title, Para } from "./styles";
import { Zoom, Slide, Fade } from "react-awesome-reveal";
interface ProductsBlockProps {
  title: string;
  text: string;
  section: any;
  button: string;
  delay?: any
  id: string;
  t: any;
};

export const ProductsBlock = ({  id, t }: ProductsBlockProps) => {
  return (
    <ProductsBlockSection id={id}>
      <Container>
        <Row justify="center" align="middle" id={id}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Content>
              <Title>{t('productsTitle')}</Title>
             </Content>
            <Row gutter={[24, 24]} justify="center">
              <Col className="text-center"xs={20} sm={20} md={12} lg={12}>
                <Para>{t("holdsText")}</Para>
              </Col>
              <Col xs={20} sm={20} md={12} lg={12}>
              <Zoom direction='up' cascade={true} triggerOnce={true} delay={500}>
                    <Image src="/img/product_1.jpg" height={350}  preview={false} />
                  </Zoom>
              </Col>                
            </Row>
            <Row gutter={[24, 24]} justify="center">
              <Col xs={20} sm={20} md={12} lg={12}>
              <Zoom direction='up' cascade={true} triggerOnce={true} delay={500}>
                  <Image src="/img/product_2.jpg" height={350}  preview={false} />
                  </Zoom>
              </Col>   
              <Col className="text-center"  xs={20} sm={20} md={12} lg={12}>
              <Para>{t("volumesText")}</Para>
              </Col>             
            </Row>
          </Col>
        </Row >
      </Container >
    </ProductsBlockSection >
  );
};

export default withTranslation()(ProductsBlock);
