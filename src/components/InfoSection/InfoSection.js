import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.element";
import { Link } from "react-router-dom";
import { Container, Button } from "./../../globalStyles";
const InfoSection = ({
  lightBg,
  lightTopLine,
  lighText,
  lighTextDesc,
  imgStart,
  topLine,
  headline,
  description,
  buttonLabel,
  gambar,
  start,
  alt,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lighText}>{headline}</Heading>
                <Subtitle lighTextDesc={lighTextDesc}>{description}</Subtitle>
                <Link to="/signup">
                  <Button big fontBig primary>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={gambar} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
