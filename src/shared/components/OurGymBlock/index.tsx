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
    <OurGymContentSection>
      <Container>
        <Row justify="center" align="middle" id={id}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Row>
              <Col key={id} xs={20} sm={12} md={12} lg={12}>
                <Image src="/img/our-gym-bg-2.png" preview={false} />
              </Col>
              <Col key={id} xs={24} sm={12} md={12} lg={12}>
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
