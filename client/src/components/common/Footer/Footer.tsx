
import { Container } from "../../HomePage/style/HomePageStyle";
import { FooterContainer } from "./style/FooterStyle";

const Footer = ()=> {
    return (
    <FooterContainer>
            <Container>
           <div className="row">
            <ul>
              <h3>Opulent Cars</h3>
              <li>Savska opatovina 96,</li>
              <li>10070, Zagreb, Croatia</li>
            </ul>
            <ul>
              <h3>Contact us</h3>
              <li>+385 xx xxx xxxx</li>
              <li>haye.robert@yahoo.com</li>
            </ul>
            <div className="social-media row">
              <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
            </div>
           </div>
          </Container>
         </FooterContainer>
         )
}

export default Footer;