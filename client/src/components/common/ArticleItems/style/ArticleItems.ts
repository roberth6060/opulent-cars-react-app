import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticleLink = styled(Link)`
  width: 400px;
  margin: 20px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.102);
  }
`;

export const ArticleContainer = styled.section`
  background-color: ${(props) => props.theme.main};
  a {
    color: black;
  }

  #articles-section {
    background-color: white;

    .card-container {
      &:hover {
        background-color: rgba(0, 0, 0, 0.102);
      }
    }
  }

  //tablet View
  @media only screen and (max-width: $laptop) {
    #articles-section {
      .card-container {
        width: 330px !important;
        margin: 15px !important;
        padding: 8px !important;
      }
    }
  }
`;

ArticleContainer.defaultProps = {
  theme: {
    main: "white",
  },
};

export const ArticleImage = styled.img`
  width: 200px;
  min-width: 100%;
  height: 200px;
  object-fit: cover;
`;
