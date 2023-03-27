import Carousel, {Dots, slidesToShowPlugin} from "@brainhubeu/react-carousel"
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { useState } from "react";
import CarItem from "../CarItem/CarItem"
import { SCREENS } from "../Responsive";
import { CarsContainer, FeaturedCarsContainer } from "./style/FeaturedCarsStyle";
import { createSelector } from "@reduxjs/toolkit";
import { makeSelectCollection } from "../../../store/features/homPageSelector";

const stateSelector = createSelector(makeSelectCollection, (collection)=> ({collection}));

const FeaturedCars = ()=> {
const {collection} = useSelector(stateSelector);


const [current, setCurrent] = useState(0);

console.log(collection)

const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
const numDots = isMobile ? collection.length : Math.ceil(collection.length / 3);
 
  // Map over collection from redux store:
   const cars = collection && collection.map((car: any)=>  <CarItem {...car}/>);
   
    return (
    <>
       <h2>Featured Cars</h2>
         <FeaturedCarsContainer>
            <CarsContainer>
                <Carousel value={current} onChange={setCurrent} slides={cars} plugins={[
                    "clickToChange",
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 3
                    }
                }]}
                breakpoints = {{
                    640: {
                        plugins: [{
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 1
                            }
                        }]
                    },
                       900: {
                        plugins: [{
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 2
                            }
                        }]
                    }
                }}
                />
               <Dots value={current} onChange ={setCurrent} number={numDots}/>  
            </CarsContainer>
        </FeaturedCarsContainer>
      </>
       )
}

export default FeaturedCars