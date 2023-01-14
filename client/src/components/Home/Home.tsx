import {HomeContainer, HomeHeader, ColorPicker,AboutSection, CollectionSection, FeaturedSection,Container, GridLayout, Main, AsideTop, AsideBottom} from "./style/Home-Style";
import { BaseButton } from "../common/Button/style/Button";
import Footer from "../common/Footer/Footer";
import ArticleItems from "../common/ArticleItems/ArticleItems";
import LeafLetMap from "../common/LeafLetMap/LeafLetMap";


const Home = ()=> {
    return (  
    <HomeContainer>
    <HomeHeader>
      <Container>
          <h1>Luxury Car<br />Dealership</h1>
          <p>
            Our cars are the embodiment of luxury, performance, and refinement.
          </p>
          <BaseButton>Shop Now</BaseButton>
          <ColorPicker className="hidden">
            <h3>What Color Is Your Future Car?</h3>
            <div className="row">
              <span className="colors orange">
              </span>
              <span className="colors blue">
              </span>
              <span className="colors yellow">
              </span>
              <span className="colors green">
              </span>
            </div>
          </ColorPicker>
          </Container>
    </HomeHeader>
      <AboutSection className="container">
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
                At Opulent Cars, we are proud to offer an exceptional selection of the world's finest luxury cars to the Croatian market. Our showroom is home to some of the most sought-after brands, including Ford Mustang, Lamborghini, and Ferrari...
              </p>
              <BaseButton>Read More</BaseButton>
            </div>
        </div>
        </Container>
      </AboutSection>
      <Container >
         <ArticleItems />
      </Container>
      <CollectionSection id="collection-section">
       <Container>
          <h2>Our Collection</h2>
      <GridLayout>
        <Main to="/collection" className="arrow-link"><span>Muscle Cars</span></Main>
        <AsideTop to="/collection" className="arrow-link"/>
        <AsideBottom to="/collection" className="arrow-link"/>
      </GridLayout>
        </Container>
        
      
   
      </CollectionSection>
      <FeaturedSection>
        <Container>
          <h2>Featured Brands</h2>
          <div className="row">
            <img
              src="https://images.unsplash.com/photo-1519245659620-e859806a8d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt=""
              width="200"
            />
            <div className="lamborghini">
              <h2>Lamborghini</h2>
              <p>
                The Lamborghini company was founded in 1963 by Ferruccio Lamborghini, an Italian businessman and automobile enthusiast. Prior to starting Lamborghini, Ferruccio had been successful in the tractor manufacturing business, but his true passion was for sports cars.Ferruccio's initial goal with Lamborghini was to produce a high-performance sports car that could compete ...
              </p>
              <BaseButton>Read More</BaseButton>
            </div>
          </div>

          <div className="row ferrari-row">
            <img
              src="https://images.unsplash.com/photo-1617654112368-307921291f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1013&q=80"
              alt="Ferrari"
              width="200"
            />
            <div className="ferrari">
              <h2>Ferrari</h2>
              <p>
                Ferrari is an Italian luxury sports car manufacturer founded by Enzo Ferrari in 1939. The company's headquarters are located in Maranello, Italy, and it is one of the most well-known and successful sports car
                brands in the world. Ferrari was born in 1898 in Modena, Italy. He was a racing driver and
                team manager for Alfa Romeo before starting his own company, Scuderia Ferrari, in 1929. The company acted as...
              </p>
              <BaseButton>Read More</BaseButton>
            </div>
          </div>
          </Container>
      </FeaturedSection>
      <Container>
        <LeafLetMap/>   
      </Container>
    <Footer/>
    </HomeContainer>
    ) 
}

export default Home;