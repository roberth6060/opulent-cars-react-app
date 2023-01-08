import {HomeContainer, HomeHeader} from "./style/Home-Style"
import Footer from "../common/Footer/Footer";

const Home = ()=> {
    return (  
      <>
    <HomeContainer>
    <HomeHeader>
      <div id="home-header">
        <div className="container">
          <h1>Luxury Car<br />Dealership</h1>
          <p>
            Our cars are the embodiment of luxury, performance, and refinement.
          </p>
          <a href="./pages/shop.html" className="myButton">Shop Now</a>
          <div className="color-picker hidden ">
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
          </div>
        </div>
      </div>
    </HomeHeader>
      <div id="about-section">
        <div className="container">
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
              <a href="./pages/about.html" className="myButton">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div id="articles-section">
        <div className="container">
          <h2>Articles</h2>
          <div className="row">
            <a href="./pages/article1.html" className="card-container">
              <img
                src="./assets/images/photo-1562522570-86db8cca0f90.avif"
                alt="car"
              />
              <h4>History of Luxury Cars</h4>
              <p>
                The history of luxury cars can be traced back to the early 1900s, when the first luxury vehicles were....
              </p>
            </a>
            <a href="./pages/article2.html" className="card-container">
              <img
                src="./assets/images/flavien-1WXjoRZeWq4-unsplash.jpg"
                alt="car"
              />
              <h4>Why Luxury Car Are So Expensive</h4>
              <p>
                Luxury cars are expensive for a number of reasons. One of the main reasons is the materials and...
              </p>
            </a>
            <a href="./pages/article3.html" className="card-container">
              <img
                src="https://images.unsplash.com/photo-1533558701576-23c65e0272fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                alt="car"
              />
              <h4>Why People Like Luxury Cars</h4>
              <p>
                People like luxury cars for a variety of reasons. For some, it's
                the prestige and status that comes with owning a...
              </p>
            </a>
          </div>
        </div>
      </div>
      <div id="collection-section">
        <div className="container">
          <h2>Our Collection</h2>
          <div className="grid-collection">
            <a className="arrow-link"  id="category1" href="./pages/muscle-cars.html"><span>Muscle Cars</span></a>
             <a className="arrow-link"  id="category2"  href="./pages/suv-cars.html"><span>Suv Cars</span></a>
             <a className="arrow-link"  id="category3" href="./pages/sports-cars.html"><span>Sports Cars</span></a>
          </div>
        </div>
      </div>
      <div id="featured-section">
        <div className="container">
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
              <a href="./pages/lamborghini.html" className="myButton">Read More</a>
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
              <a href="./pages/ferrari.html" className="myButton">Read More</a>
            </div>
            
          </div>
        </div>
      </div>

      <div id="location-section">
        <div className="container">
          <h2>Location</h2>
          <div id="map"></div>
        </div>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""
        />
      </div>
     
    </HomeContainer>
    <Footer/>
    </>
    ) 
}

export default Home;