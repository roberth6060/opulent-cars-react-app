import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import { Container, FlexRow } from "../../../style";
import { FooterContainer } from "./style/FooterStyle";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

//  library.add(faFacebookF); 

const Footer = ()=> {
 
    return (
    <FooterContainer>
            <Container>
           <FlexRow>
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
              {/* <a href="https://www.facebook.com"></a> */}
                {/* <a href=""><FontAwesomeIcon icon={faSchool} /></a>  */}
              <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
            </div>
           </FlexRow>
          </Container>
         </FooterContainer>
         )
}

export default Footer;