import { Row, Col, Image } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { Zoom } from "react-awesome-reveal";

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
              <Col xs={24} sm={24} md={24} lg={16}>
                <div className="text-box">
                  <div className="text-white">
                    <div>
                      <MinTitle>{t("dayPass")}</MinTitle>
                      <Para>{t("adultPass")}<span>150.000 vnd</span></Para>
                      <Para>{t("kidPass")}<span>130.000 vnd</span></Para>
                    </div>

                    <div>
                      <MinTitle>{t("punchPass")}</MinTitle>
                      <Para>5 {t("punchPasses")}<span>700.000 vnd ({t("valid")} 1 {t("month")})</span></Para>
                      <Para>10 {t("punchPasses")}<span>1300.000 vnd  ({t("valid")} 2 {t("month")})</span></Para>
                      <MinPara>{t("punchNote")}</MinPara>

                    </div>
                  </div>
                  <div className="text-gray">
                    <div>
                    <MinTitle>{t("membership")}</MinTitle>
                      <Para>1 {t("month")}<span>1.500.000 vnd</span></Para>
                      <Para>3 {t("month")}<span>3.000.000 vnd</span></Para>
                      <Para>6 {t("month")}<span>5.000.000 vnd</span></Para>
                      <Para>{t("annualPrepaid")}<span>9.000.000 vnd</span></Para>
                      <MinPara>{t("annualPrepaidNote1")}</MinPara>
                      <MinPara>{t("annualPrepaidNote2")}</MinPara>
                    </div>
                    
                    <div>
                      <MinTitle>{t("equipmentRental")}</MinTitle>
                      <Para>{t("shoses")}<span>50.000 vnd</span></Para>
                      <Para>{t("chalk")}<span>30.000 vnd</span></Para>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8}>
                <Zoom cascade={true} triggerOnce={true} delay={300}>
                <Image src="/img/course.jpg" preview={false} />
                </Zoom>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </PricesContentSection>
  );
};

export default withTranslation()(PricesBlock);
