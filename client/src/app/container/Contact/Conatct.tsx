import { ContactContainer } from "./style/ContactStyle";
import { Container } from "../HomePage/style/HomePageStyle";
import Footer from "../../components/Footer/Footer";

const Contact = ()=> {
    return ( <ContactContainer>
      <Container>
        <h2>Contact Us</h2>
        <div id="contact-container">
          <form action="#" method="post" id="contact_form">
            <div className="name">
              <label htmlFor="name"></label>
              <input
                type="text"
                placeholder="My name is"
                name="name"
                id="name_input"
                required
              />
            </div>
            <div className="email">
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="My e-mail is"
                name="email"
                id="email_input"
                required
              />
            </div>
            <div className="telephone">
              <label htmlFor="name"></label>
              <input
                type="text"
                placeholder="My number is"
                name="telephone"
                id="telephone_input"
                required
              />
            </div>
            <div className="subject">
              <label htmlFor="subject"></label>
              <select
                placeholder="Subject line"
                name="subject"
                id="subject_input"
                required
              >
                <option disabled hidden selected>Subject line</option>
                <option>I would like to buy car</option>
                <option>I would like to rent car</option>
                <option>I am requesting a inquiry about a car</option>
              </select>
            </div>
            <div className="message">
              <label htmlFor="message"></label>
              <textarea
                name="message"
                placeholder="I'd like to chat about"
                id="message_input"
                // cols="30"
                // rows="5"
                required
              ></textarea>
            </div>
            <div className="submit">
              <input type="submit" value="Send Message" id="form_button" />
            </div>
          </form>
        </div>
      </Container>
      <Footer/>
    </ContactContainer>)
}

export default Contact;