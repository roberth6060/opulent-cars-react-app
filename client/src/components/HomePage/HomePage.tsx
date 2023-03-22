import { useNavigate } from 'react-router-dom';
import {HomeContainer, HomeHeader,ArticlesSection, AboutImage, AboutConent, CollectionSection, FeaturedSection, GridLayout, Main, AsideTop, AsideBottom} from "./style/HomePageStyle";
import Button, { BUTTON_TYPE_CLASSES } from "../common/Button/Button";
import Footer from "../common/Footer/Footer";
import ArticleItems from "../common/ArticleItems/ArticleItems";
import LeafLetMap from "../common/LeafLetMap/LeafLetMap";
import BookCard from "../common/BookCard/BookCard";
import FeaturedCars from "../../components/common/FeaturedCars/FeaturedCars";
import { Container, FlexRow } from "../../style";


const HomePage = ()=> {
  const navigate = useNavigate();
  // reroute 
 const navigateAbout = ()=> {
  navigate("/about")
 }

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
          </Container>
    </HomeHeader>
        <Container>
          <FlexRow>
            <AboutImage />
            <AboutConent>
              <h2>About Us</h2>
              <p>
                At Opulent Cars, we are proud to offer an exceptional selection of the world's finest luxury cars to the Croatian market. Our showroom is home to some of the most sought-after brands, including Ford Mustang, Lamborghini, and Ferrari...
              </p>
              <Button type="button" onClick={navigateAbout} buttonType={BUTTON_TYPE_CLASSES.readMore}>Read More</Button>
            </AboutConent>
        </FlexRow>
        </Container>
        <ArticlesSection>
           <ArticleItems  />
        </ArticlesSection>
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