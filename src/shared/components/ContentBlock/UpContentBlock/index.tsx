import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../../common/Container";
import { SvgIcon } from "../../../common/SvgIcon";
import { Zoom } from "react-awesome-reveal";
import {
  UpContentSection,
  ContentWrapper,
  MinTitle,
} from "./styles";

interface IContentBlockProps {
  title: string;
  section?: any;
  id: string;
  type?: string;
  delay?: any
  t?: any;
};

const UpContentBlock = ({
  title,
  section,
  delay,
  t,
  id,
}: IContentBlockProps) => {
  return (
    <UpContentSection>
      <Container>
        <>
          <Row justify="space-between" align="middle" id={id}>
            <Col lg={24} md={24} sm={24} xs={24}>
              <ContentWrapper>
                <h6>{t(title)}</h6>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} lg={6} md={6} sm={12} xs={24}>
                          <Zoom className='pricing_item' delay={delay}>
                            <SvgIcon src={item.icon} width="180px" height="180px" />
                            <MinTitle>{t(item.title)}</MinTitle>
                          </Zoom>
                        </Col>
                      );
                    })}
                </Row>

              </ContentWrapper>
            </Col>

          </Row>
        </>
      </Container>
    </UpContentSection >
  );
};

export default withTranslation()(UpContentBlock);
