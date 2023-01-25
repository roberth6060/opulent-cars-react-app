import Carousel, {Dots, slidesToShowPlugin} from "@brainhubeu/react-carousel"
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { ICarItem } from "../../types/CarItemType";
import CarItem from "../CarItem/CarItem"
import { SCREENS } from "../Responsive";
import { CarsContainer, FeaturedCarsContainer } from "./style/FeaturedCarsStyle"
import { gql, useQuery } from "@apollo/client";
import Spinner from "../Spinner/Spinner";



const FeaturedCars = ()=> {
const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

 const testCar: ICarItem = {
    name: "Audi S3 Car",
    mileage: "10k",
    url:
      "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=lamborghini&modelFamily=huracan&modelRange=huracan-evo&modelVariant=co&modelYear=2022&powerTrain=petrol&transmission=0&bodySize=2&trim=eu&paintId=pspc0034&fileType=png&zoomType=fullscreen&zoomLevel=100&width=1600&angle=01",
    rentingPriceDaily: 70,
    rentingPriceMonthly: 1600,
    gearType: "Auto",
    gas: "Petrol",
    buyingCost: 303000,
  };

  const testCar2: ICarItem = {
    name: "HONDA cITY 5 Seater Car",
    mileage: "20k",
    url:
      "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=porsche&modelFamily=911&modelRange=911&modelVariant=ca&modelYear=2019&powerTrain=fossil&transmission=0&bodySize=2&trim=0&paintId=pspc0041&fileType=png&zoomType=fullscreen&zoomLevel=100&width=1600&angle=01",
    rentingPriceDaily: 50,
    rentingPriceMonthly: 1500,
    buyingCost: 300000,
    gearType: "Auto",
    gas: "Petrol",
    
  };
  const cars = [
                <CarItem {...testCar}/>, 
                <CarItem {...testCar}/>, 
                <CarItem {...testCar}/>, 
                <CarItem {...testCar2}/>, 
                <CarItem {...testCar2}/>
                ];

const GET_CARS = gql`
     query{
  cars{
    id
    name
    dailyPrice
    monthlyPrice
    mileage
    gas
    gearType
    url
  }
}
`

 const {loading, error, data }= useQuery(GET_CARS);

   if(loading) return <Spinner/>
   if(error) return <p>Something went wrong</p>
   console.log(data.cars)
  //  console.log(cars);
   const cars2 = data.cars.map((car: any)=>  <CarItem {...car}/>)


    return (
    <>
       <h2>Featured Cars</h2>
         <FeaturedCarsContainer>
            <CarsContainer>
                <Carousel value={current} onChange={setCurrent} slides={cars2} plugins={[
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
               <Dots value={current} onChange ={setCurrent} number={isMobile ? cars.length : Math.ceil(cars2.length / 3)}/>
            
            </CarsContainer>
        </FeaturedCarsContainer>
      </>
       )
 
  
}

export default FeaturedCars