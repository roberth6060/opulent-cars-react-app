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
  width: 20rem;
  height: 25rem;
  object-fit: cover;
  object-position: top left;
  align-items: center;
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
