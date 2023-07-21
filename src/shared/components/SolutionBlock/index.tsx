import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Zoom } from "react-awesome-reveal";
import {
  SolutionContentSection,
  Title,
  Content,
  MinTitle,
} from "./styles";

interface SolutionBlockProps {
  title: string;
  text: string;
  section?: any;
  id: string;
  type?: string;
  delay?: any
  t: any;
};

const SolutionBlock = ({
  title,
  text,
  section,
  delay,
  t,
  id,
}: SolutionBlockProps) => {
  return (
    <SolutionContentSection>
      <Container>
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Title>{t(title)}</Title>
            <Content>{t(text)}</Content>
            <Row justify="space-between">
              {typeof section === "object" &&
                section.map((item: any, id: number) => {
                  return (
                    <Col key={id} lg={6} md={6} sm={12} xs={24}>
                      <Zoom delay={delay} triggerOnce={true}>
                        <SvgIcon src={item.icon} width="180px" height="180px" />
                        <MinTitle>{t(item.title)}</MinTitle>
                      </Zoom>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Container>
    </SolutionContentSection >
  );
};

export default withTranslation()(SolutionBlock);
