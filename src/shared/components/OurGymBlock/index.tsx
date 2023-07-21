import { Row, Col, Image } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import {
  OurGymContentSection,
  ContentWrapper,
  Title,
  MinTitle,
} from "./styles";

interface ServicesBlockProps {
  title: string;
  text: string,
  id: string;
  t: any;
};


const OurGymBlock = ({
  title,
  text,
  t,
  id,
}: ServicesBlockProps) => {
  return (
    <OurGymContentSection id={id}>
      <Container>
        <Row justify="center" align="middle" id={id}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Row justify="center">
              <Col xs={24} sm={24} md={12} lg={12}>
                <Image src="/img/our-gym-bg-2.png" preview={false} />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <ContentWrapper>
                  <Title>{t(title)}</Title>
                  <MinTitle>{t(text)}</MinTitle>
                </ContentWrapper>

              </Col>
            </Row>
          </Col>
        </Row >
      </Container >
    </OurGymContentSection>
  );
};

export default withTranslation()(OurGymBlock);
