import Carousel, {Dots, slidesToShowPlugin} from "@brainhubeu/react-carousel"
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ICollection } from "../../../types/CollectionType";
import CarItem from "../CarItem/CarItem"
import { SCREENS } from "../Responsive";
import { CarsContainer, FeaturedCarsContainer } from "./style/FeaturedCarsStyle"
import { useQuery } from "@apollo/client";
import Spinner from "../Spinner/Spinner";
import { GET_COLLECTION } from "../../../services/collectionService/queries";
import CollectionService from "../../../services/collectionService"
import { createSelector } from "@reduxjs/toolkit";
import { makeSelectCollection } from "../../../store/features/homPageSelector";

const stateSelector = createSelector(makeSelectCollection, (collection)=> ({collection}));

const FeaturedCars = ()=> {
    
const [current, setCurrent] = useState(0);
const [collection, setCollection] = useState([]);


//   const {collection} = useSelector(stateSelector);

//   console.log("%creselect data","color: red", collection)

const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });



 const {loading, error, data }= useQuery(GET_COLLECTION, {
  onCompleted(data) {
    
    console.log("%cdata", "color: blue;", data)
      setCollection(data.getCars.filter((car: ICollection)=>car.isFeaturedCar === true));
  },
 });
 
  //Will state management with redux: 
   const cars = collection && collection.map((car: any)=>  <CarItem {...car}/>)
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
               <Dots value={current} onChange ={setCurrent} number={isMobile ? cars.length : Math.ceil(cars.length / 3)}/>  
            </CarsContainer>
        </FeaturedCarsContainer>
      </>
       )
}

export default FeaturedCars