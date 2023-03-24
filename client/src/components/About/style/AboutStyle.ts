import styled from "styled-components";
import { bgClrLight } from "../../../style/variables";
import CEOImage from "../../../assets/images/ceo.avif";

export const AboutContainer = styled.div`
  background-color: ${bgClrLight};
`;
export const ImageContainer = styled.div`
  h2 {
    text-align: center;
  }
`;

export const CEOIMage = styled.img.attrs({ src: CEOImage, alt: "CEO" })`
  width: 25%;
  height: 25rem;
  object-fit: cover;
  object-position: top left;
  align-items: center;
`;

export const MissionStatement = styled.h3`
  display: flex;
  width: 75%;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: 1.6rem;
  padding: 0 2rem;
  line-height: 2.5rem;
`;

export const ServiceImage = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  margin: 0 5px;
`;

export const Title = styled.h2``;

export const Content = styled.p`
  /* background-color: red; */
`;
