import { useNavigate } from 'react-router-dom';
import {HomeContainer, HomeHeader,ArticlesSection, AboutImage, AboutConent, CollectionSection, FeaturedSection, GridLayout, Main, AsideTop, AsideBottom, ArrowText, AboutSection, MapSection} from "./style/HomePageStyle";
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
     <AboutSection>
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
     </AboutSection>
        <ArticlesSection>
           <ArticleItems  />
        </ArticlesSection>
      <CollectionSection>
       <Container>
          <h2>Our Collection</h2>
      <GridLayout>
        <Main to="/collection" ><ArrowText>Muscle Cars</ArrowText></Main>
        <AsideTop to="/collection" ><ArrowText>SUV Cars</ArrowText></AsideTop>
        <AsideBottom to="/collection" ><ArrowText>Sports Cars</ArrowText></AsideBottom>
      </GridLayout>
        </Container>
      </CollectionSection>
      <FeaturedSection>
        <Container>
          <FeaturedCars/>
        </Container>
      </FeaturedSection>
      <MapSection>
        <Container>
        <LeafLetMap/>   
      </Container>
      </MapSection>
    <Footer/>
    </HomeContainer>
  ) 
}

export default HomePage;