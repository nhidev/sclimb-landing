import { Row, Col, Image } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { Zoom } from "react-awesome-reveal";
import {
  ServicesContentSection,
  Title,
  MinTitle,
} from "./styles";

interface ServicesBlockProps {
  title: string;
  section: any;
  delay?: any
  id: string;
  t: any;
};


const ServicesBlock = ({
  title,
  section,
  t,
  id,
}: ServicesBlockProps) => {
  return (
    <ServicesContentSection>
      <Container>
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Title>{t(title)}</Title>
            <Row gutter={[24, 24]} justify="space-between">
              {typeof section === "object" &&
                section.map((item: any, id: number) => {
                  return (
                    <Col key={id} xs={20} sm={12} md={8} lg={8}>
                      <Zoom delay={item.delay}>
                        <Image src={item.icon} height={250} />
                        <MinTitle>{t(item.title)}</MinTitle>
                      </Zoom>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row >
      </Container >
    </ServicesContentSection>
  );
};

export default withTranslation()(ServicesBlock);
