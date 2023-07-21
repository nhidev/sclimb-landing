import { Row, Col, Image } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { ProductsBlockSection, Content, Title, Para } from "./styles";
import { Zoom, Fade } from "react-awesome-reveal";
interface ProductsBlockProps {
  title: string;
  text: string;
  section: any;
  button: string;
  delay?: any
  id: string;
  t: any;
};

export const ProductsBlock = ({ id, t }: ProductsBlockProps) => {
  return (
    <ProductsBlockSection id={id}>
      <Container>
        <Row justify="center" align="middle" id={id}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Content>
              <Title>{t('productsTitle')}</Title>
            </Content>
            <Row gutter={[24, 24]} justify="center">
              <Col className="text-center" xs={20} sm={20} md={12} lg={12}>
                <Fade direction='up' triggerOnce={true}>{t("holdsText")}</Fade>
              </Col>
              <Col xs={20} sm={20} md={12} lg={12}>
              <Fade direction='up' triggerOnce={true}>
                  <Image src="/img/product_1.jpg" height={350} preview={false} />
                </Fade>
              </Col>
            </Row>
            <Row gutter={[24, 24]} justify="center">
              <Col className="col-img" xs={20} sm={20} md={12} lg={12}>
              <Fade direction='up' triggerOnce={true}>
                  <Image src="/img/product_2.jpg" height={350} preview={false} />
                </Fade>
              </Col>
              <Col className="col-text text-center" xs={20} sm={20} md={12} lg={12}>
              <Fade direction='up' triggerOnce={true}>{t("volumesText")}</Fade>
              </Col>
            </Row>
          </Col>
        </Row >
      </Container >
    </ProductsBlockSection >
  );
};

export default withTranslation()(ProductsBlock);
