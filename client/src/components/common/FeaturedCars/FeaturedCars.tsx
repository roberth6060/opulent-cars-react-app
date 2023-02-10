import Carousel, {Dots, slidesToShowPlugin} from "@brainhubeu/react-carousel"
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { ICarItem } from "../../../types/CarItemType";
import CarItem from "../CarItem/CarItem"
import { SCREENS } from "../Responsive";
import { CarsContainer, FeaturedCarsContainer } from "./style/FeaturedCarsStyle"
import { useQuery } from "@apollo/client";
import Spinner from "../Spinner/Spinner";
import { GET_CARS } from "../../../services/collectionService/queries";



const FeaturedCars = ()=> {
const [current, setCurrent] = useState(0);
const [collection, setCollection] = useState([]);


const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });



 const {loading, error, data }= useQuery(GET_CARS, {
  onCompleted(data) {
      setCollection(data.getCars.filter((car: ICarItem)=>car.isFeaturedCar === true));
  },
 });
 
 console.log(data)

   if(loading) return <Spinner/>
   if(error) return <p>Something went wrong</p>
   console.log(data)

  //Will state management with redux: 
   const cars = collection.map((car: any)=>  <CarItem {...car}/>)
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