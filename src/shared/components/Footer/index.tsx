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
      <FooterSection id="contact">
        <Container>
          <Row justify="space-between">
            <Col lg={14} md={10} sm={12} xs={24}>
              <Language>{t("contact")}</Language>
              <Para>T18-23, Manhattan, Vinhomes Grand Park, Long Binh</Para>
              <Para>District 9, Ho Chi Minh City, Viet Nam</Para>
              <Para>gosclimb@gmail.com</Para>
              <Para>+84 901 414 277</Para>
              <Para><a className="link" href="https://www.google.com/maps/place/Sclimb/@10.8387915,106.8427268,17z/data=!3m1!4b1!4m6!3m5!1s0x31752146333972ad:0x8989142085553c58!8m2!3d10.8387862!4d106.8453017!16s%2Fg%2F11kq61cwvv?entry=ttu"  target="_blank" title="Sclimb">{t("googleMap")}</a></Para>
            </Col>
            <Col lg={6} md={8} sm={12} xs={24}>
              <Title>{t("hours")}</Title>
              <Large>{t("monToSun")}</Large>
            </Col>
            <Col lg={4} md={6} sm={12} xs={24}>
              <Label htmlFor="select-lang">{t("language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("br")}>
                  <SvgIcon
                    src="vietnam.svg"
                    aria-label="homepage"
                    width="32px"
                    height="32px"
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
                href="https://www.instagram.com/gosclimb"
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
