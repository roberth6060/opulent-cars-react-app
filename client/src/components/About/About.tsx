import { Container } from "../Home/style/Home-Style";
import Footer from "../common/Footer/Footer";
const About = ()=> {
    return (  <div className="about-page">
      <div id="about-section">
        <Container>
          <div className="row">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Ceo"
              width="200"
            />
            <div className="about-content">
              <h2>About Us</h2>
              <p>
                At Opulent Cars, we are proud to offer an exceptional selection
                of the world's finest luxury cars to the Croatian market. Our
                showroom is home to some of the most sought-after brands,
                including Ford Mustang, Lamborghini, and Ferrari. Our team of
                knowledgeable and experienced sales consultants is dedicated to
                helping you find the perfect luxury car to fit your individual
                needs and preferences. We will work closely with you to
                understand your unique driving style and needs, and will help
                you compare and contrast different models to find the one that's
                right for you. In addition to our exceptional sales team,
                Opulent Cars is also home to a state-of-the-art service center.
                Our factory-trained technicians have the expertise and knowledge
                to keep your luxury car running at its best, and we use only the
                finest parts and tools to ensure that every repair and
                maintenance service is done right the first time. Thank you for
                choosing Opulent Cars for all of your luxury car needs. We look
                forward to the opportunity to serve you and help you experience
                the ultimate in luxury driving.
              </p>
            </div>
          </div>
          <div className="margin-top">
            <h2 className="title">We Strive For Excellence In Customer Service</h2>
            <div className="row">
              <img src="../assets/images/getty-images-D1ywMW3a3Vk-unsplash.jpg" alt="Customer Service Image" />
              <img
                src="../assets/images/getty-images-uAVaeUoPJK8-unsplash.jpg"
                alt="Customer Service Image"
              />
              <img
                src="../assets/images/getty-images-zltLLD8h540-unsplash.jpg"
                alt="Customer Service Image"
              />
            </div>
          </div>
        </Container>
      </div>
      <Footer/>
    </div>
    )
}

export default About;