import styled from "styled-components";

export const ArticleContainer = styled.section`
  background-color: ${(props) => props.theme.main};
  a {
    color: black;
  }
  .card-container {
    width: 400px;
    margin: 20px;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.102);
    }
    img {
      width: 200px;
      min-width: 100%;
      height: 200px;
      object-fit: cover;
    }
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
