import Footer from "../common/Footer/Footer";
import {
  AboutContainer,
  CEOIMage,
  Content,
  ImageContainer,
  MissionStatement,
  ServiceImage,
  Title,
} from "./style/AboutStyle";
import ServiceImg1 from "../../assets/images/getty-images-D1ywMW3a3Vk-unsplash.jpg";
import ServiceImg2 from "../../assets/images/getty-images-uAVaeUoPJK8-unsplash.jpg";
import ServiceImg3 from "../../assets/images/getty-images-zltLLD8h540-unsplash.jpg";
import { Container, FlexRow } from "../../style";

const About = () => {
  return (
    <>
      <AboutContainer>
        <Container>
          <FlexRow>
            <CEOIMage />
            <MissionStatement>
              "Our mission is to provide an unparalleled luxury car buying
              experience that exceeds our customers' expectations by offering
              the highest quality and most exclusive selection of vehicles,
              combined with exceptional customer service and a welcoming and
              luxurious environment."
            </MissionStatement>
          </FlexRow>
          <Title>About Us</Title>
          <Content>
            At Opulent Cars, we are proud to offer an exceptional selection of
            the world's finest luxury cars to the Croatian market. Our showroom
            is home to some of the most sought-after brands, including Ford
            Mustang, Lamborghini, and Ferrari. Our team of knowledgeable and
            experienced sales consultants is dedicated to helping you find the
            perfect luxury car to fit your individual needs and preferences. We
            will work closely with you to understand your unique driving style
            and needs, and will help you compare and contrast different models
            to find the one that's right for you. In addition to our exceptional
            sales team, Opulent Cars is also home to a state-of-the-art service
            center. Our factory-trained technicians have the expertise and
            knowledge to keep your luxury car running at its best, and we use
            only the finest parts and tools to ensure that every repair and
            maintenance service is done right the first time. Thank you for
            choosing Opulent Cars for all of your luxury car needs. We look
            forward to the opportunity to serve you and help you experience the
            ultimate in luxury driving.
          </Content>
          <ImageContainer>
            <Title>We Strive For Excellence In Customer Service</Title>
            <FlexRow>
              <ServiceImage src={ServiceImg1} />
              <ServiceImage src={ServiceImg2} />
              <ServiceImage src={ServiceImg3} />
            </FlexRow>
          </ImageContainer>
        </Container>
      </AboutContainer>
      <Footer />
    </>
  );
};
export default About;
