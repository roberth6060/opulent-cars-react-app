import {HomeContainer, HomeHeader, ColorPicker,AboutSection, CollectionSection, FeaturedSection,Container, GridLayout, Main, AsideTop, AsideBottom} from "./style/HomePageStyle";
import Button, { BUTTON_TYPE_CLASSES } from "../common/Button/Button";
import Footer from "../common/Footer/Footer";
import ArticleItems from "../common/ArticleItems/ArticleItems";
import LeafLetMap from "../common/LeafLetMap/LeafLetMap";
import BookCard from "../common/BookCard/BookCard";
import FeaturedCars from "../../components/common/FeaturedCars/FeaturedCars";


const HomePage = ()=> {
    return (  
    <HomeContainer>
    <HomeHeader>
      <Container>
          <h1>Luxury Car<br />Dealership</h1>
          <p>
            Our cars are the embodiment of luxury, performance, and refinement
          </p>
          <div className="button-container" >
          <Button type="button"  buttonType={BUTTON_TYPE_CLASSES.base}>Rent Car</Button>
          <Button type="button"  buttonType={BUTTON_TYPE_CLASSES.inverted}>Buy Car</Button>
          </div>
          <div className="book-ride">
            <BookCard/>
          </div>
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
              <Button type="button"  buttonType={BUTTON_TYPE_CLASSES.readMore}>Read More</Button>
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
          <FeaturedCars/>
        </Container>
      </FeaturedSection>
      <Container>
        <LeafLetMap/>   
      </Container>
    <Footer/>
    </HomeContainer>
    ) 
}

export default HomePage;