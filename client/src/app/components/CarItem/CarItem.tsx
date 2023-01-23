import { faEllipsis, faFillDrip, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICarItem } from "../../types/CarItemType";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { CarContainer, CarDetail, CarDetailsContainer, CarInfo, CarName, CarThumbnail, DailyPrice, MonthPrice, PricesContainer, Seperator, SmallIcon, SmallText } from "./style/CarItem";

interface ICarItemProps extends ICarItem {

}



const CarItem = (props: ICarItemProps)=> {

    const {name, url, mileage, rentingPriceDaily, rentingPriceMonthly, gearType, gas} = props;

  

    return (
    <CarContainer>
        <CarThumbnail>
            <img src={url} alt={name}  />
        </CarThumbnail>
        <CarName>{name}</CarName>
        <PricesContainer>
            
        <DailyPrice>{rentingPriceDaily} <SmallText>/day</SmallText></DailyPrice>
        <MonthPrice>{rentingPriceMonthly} <SmallText>/month</SmallText></MonthPrice>
        </PricesContainer>

        <Seperator/>
        <CarDetailsContainer>

        <CarDetail>
            <SmallIcon>
                <FontAwesomeIcon icon={faTachometerAlt}/>
            </SmallIcon>
            <CarInfo>
                {mileage}
            </CarInfo>
        </CarDetail>

         <CarDetail>
            <SmallIcon>
                <FontAwesomeIcon icon={faEllipsis}/>
            </SmallIcon>
            <CarInfo>
                {gearType}
            </CarInfo>
        </CarDetail>

         <CarDetail>
            <SmallIcon>
                <FontAwesomeIcon icon={faFillDrip}/>
            </SmallIcon>
            <CarInfo>
                {gas}
            </CarInfo>
        </CarDetail>
           </CarDetailsContainer>
      <Button type="button"  buttonType={BUTTON_TYPE_CLASSES.google}>Rent Now</Button>
    </CarContainer>)
}

export default CarItem;