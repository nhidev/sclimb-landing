import { Row, Col, Image } from "antd";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import { IntroBlockSection, ContentWrapper, Content } from "./styles";

interface IntroBlockProps {
  title: string;
  button: string;
  id: string;
  t: any;
};

export const IntroBlock = ({ button, id, t }: IntroBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <IntroBlockSection id={id}>
      <Row justify="center">
        <Image
          src={'/img/hero.jpg'}
          preview={false}
        />
        <ContentWrapper>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Content>
              <h6>{t('heroText')}</h6>
              {button && (
                <Button name="submit" btnSize="lg" onClick={() => scrollTo("products")}>
                  <span>↓</span>
                  {t(button)}
                </Button>
              )}
            </Content>
          </Col>
        </ContentWrapper>
      </Row>
    </IntroBlockSection>
  );
};

export default withTranslation()(IntroBlock);
