import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: $bg-brown;

  ul {
    margin: 20px;
    list-style: none;
    display: inline-block;
    padding: 0;

    li {
      margin: auto;
    }
  }
  .social-media {
    margin: 20px;
    font-size: 30px;

    align-items: center;

    i {
      padding: 5px;
    }
  }
`;

export const HomeHeader = styled.div`
  background-image: url("https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 600px;
`;
