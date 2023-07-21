import { Row, Col, Image } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { Zoom, Fade } from "react-awesome-reveal";

import {
  PricesContentSection,
  Title,
  MinTitle,
  Para,
  MinPara,
} from "./styles";

interface PricesBlockProps {
  title: string;
  section: any;
  delay?: any
  id: string;
  t: any;
};


const PricesBlock = ({
  title,
  section,
  t,
  id,
}: PricesBlockProps) => {
  return (
    <PricesContentSection>
      <Container>
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Row gutter={[24, 24]} justify="center">
              <Col xs={24} sm={24} md={24} lg={16} className="text-box">
                <Row gutter={[24, 24]} justify="center" className="text-white">
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <Fade direction='up' triggerOnce={true}>
                      <MinTitle>{t("dayPass")}</MinTitle>
                      <Para>{t("adultPass")}<span>150.000 vnd</span></Para>
                      <Para>{t("kidPass")}<span>130.000 vnd</span></Para>
                    </Fade>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12}>
                    <Fade direction='up' triggerOnce={true}>
                      <MinTitle>{t("punchPass")}</MinTitle>
                      <Para>5 {t("punchPasses")}<span>700.000 vnd ({t("valid")} 1 {t("month")})</span></Para>
                      <Para>10 {t("punchPasses")}<span>1300.000 vnd  ({t("valid")} 2 {t("month")})</span></Para>
                      <MinPara>{t("punchNote")}</MinPara>
                    </Fade>

                  </Col>
                </Row>

                <Row gutter={[24, 24]} justify="center" className="text-gray">
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <Fade direction='up' triggerOnce={true}>
                      <MinTitle>{t("membership")}</MinTitle>
                      <Para>1 {t("month")}<span>1.500.000 vnd</span></Para>
                      <Para>3 {t("month")}<span>3.000.000 vnd</span></Para>
                      <Para>6 {t("month")}<span>5.000.000 vnd</span></Para>
                      <Para>{t("annualPrepaid")}<span>9.000.000 vnd</span></Para>
                      <MinPara>{t("annualPrepaidNote1")}</MinPara>
                      <MinPara>{t("annualPrepaidNote2")}</MinPara>
                    </Fade>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12}>
                    <Fade direction='up' triggerOnce={true}>
                      <MinTitle>{t("equipmentRental")}</MinTitle>
                      <Para>{t("shoses")}<span>50.000 vnd</span></Para>
                      <Para>{t("chalk")}<span>30.000 vnd</span></Para>
                    </Fade>
                  </Col>
                </Row>

              </Col>
              <Col xs={24} sm={24} md={24} lg={8}>
                <Fade direction='up' triggerOnce={true}>
                  <Image src="/img/course.jpg" preview={false} />
                </Fade>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </PricesContentSection>
  );
};

export default withTranslation()(PricesBlock);
