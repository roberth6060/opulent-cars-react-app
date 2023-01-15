import { ICarItem } from "../../types/CarItem";
import CarItem from "../CarItem/CarItem"
import { CarsContainer, FeaturedCarsContainer } from "./style/FeaturedCarsStyle"

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


const FeaturedCars = ()=> {
    return (
    <>
       <h2>Featured Cars</h2>
         <FeaturedCarsContainer>
            <CarsContainer>
                <CarItem {...testCar} />
                <CarItem {...testCar} />
                <CarItem {...testCar2} />
            </CarsContainer>
        </FeaturedCarsContainer>
      </>
       )
 
  
}

export default FeaturedCars