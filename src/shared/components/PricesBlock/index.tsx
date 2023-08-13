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
                    <MinTitle>{t("dayPass")}</MinTitle>
                    <Para>{t("adultPass")}<span>150.000 vnd</span></Para>
                    <Para>{t("kidPass")}<span>100.000 vnd</span></Para>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12}>
                    <MinTitle>{t("punchPass")}</MinTitle>
                    <Para>{t("adultPass")}<span>1.500.000 vnd / 12 {t("punchPasses")}</span></Para>
                    <Para>{t("kidPass")}<span>1.000.000 vnd / 12 {t("punchPasses")}</span></Para>
                    <MinPara>{t("punchNote")}</MinPara>
                  </Col>
                </Row>

                <Row gutter={[24, 24]} justify="center" className="text-gray">
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <MinTitle>{t("membership")}</MinTitle>
                    <Para>1 {t("month")}<span>1.200.000 vnd</span></Para>
                    <Para>6 {t("month")}<span>6.000.000 vnd</span></Para>
                    <Para>{t("annualPrepaid")}<span>10.800.000 vnd</span></Para>
                    <MinPara>{t("annualPrepaidNote1")}</MinPara>
                    <MinPara>{t("annualPrepaidNote2")}</MinPara>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12}>
                    <MinTitle>{t("equipmentRental")}</MinTitle>
                    <Para>{t("shoes")}<span>25.000 vnd</span></Para>
                    <Para>{t("chalk")}<span>30.000 vnd</span></Para>
                  </Col>
                </Row>

              </Col>
              <Col xs={24} sm={24} md={24} lg={8}>
                <Row gutter={[24, 24]} justify="center" className="text-white">
                    <Col xs={24}>
                      <MinTitle>{t("climbingStuffs")}</MinTitle>
                      <Para>{t("tShirtAdult")}<span>250.000 vnd</span></Para>
                      <Para>{t("tShirtKid")}<span>210.000 vnd</span></Para>
                      <Para>{t("looseChalkSmlall")}<span>80.000 vnd</span></Para>
                      <Para>{t("boltChalkBag")}<span>415.000 vnd</span></Para>
                      <Para>{t("hangerChalkPot")}<span>862.000 vnd</span></Para>
                    </Col>

                    <Col xs={24}>
                      <MinTitle>{t("feetAndHandsCare")}</MinTitle>
                      <Para>{t("smellWellShoseDeodorizer")}<span>258.000 vnd</span></Para>
                      <Para>{t("shoesDeodorizerPowder")}<span>225.000 vnd</span></Para>
                      <Para>{t("shoesOdourSpray")}<span>185.000 vnd</span></Para>
                      <Para>{t("shoesDeodorizerBag")}<span>498.000 vnd</span></Para>
                      <Para>{t("liquidChalk")}<span>240.000 vnd</span></Para>
                    </Col>

                  </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </PricesContentSection>
  );
};

export default withTranslation()(PricesBlock);
