import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">


            <Col lg={14} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Chat>
                {t(`Always learning and innovating, no project is too big or small, just ask us`)}
              </Chat>
              <Para>347 Huynh Van Banh Street, Ward 11, Phu Nhuan District</Para>
              <Para>Ho Chi Minh City, Viet Nam</Para>
              <Para>info@sclimb.vn</Para>
              <Para>+84 974 833 783</Para>
            </Col>
            <Col lg={6} md={8} sm={12} xs={12}>
              <Title>{t("Main Menu")}</Title>
              <Large left="true" to="/">
                {t("About")}
              </Large>
              <Large left="true" to="/">
                {t("Holds")}
              </Large>

              <Large left="true" to="/">
                {t("Volumes")}
              </Large>
              <Large left="true" to="/">
                {t("Services")}
              </Large>
              {/* <Large left="true" to="/">
                {t("Climbing Gyms")}
              </Large> */}
            </Col>
            <Col lg={4} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("br")}>
                  <SvgIcon
                    src="vietnam.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="64px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.facebook.com/gosclimb"
                src="facebook.svg"
              />
              <SocialLink
                href="https://www.instagram.com/vunguyenstrong"
                src="instagram.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
