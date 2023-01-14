import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { Marginer } from "../Marginer/Marginer";
import { CardContainer, Icon, ItemContainer, Name , LineSeperator} from "./style/BookCard";

const BookCard = ()=> {
    return (<CardContainer>
    <ItemContainer>
        <Icon>
            <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Pick Up Date</Name>
    </ItemContainer>
    <LineSeperator/>
    <ItemContainer>
        <Icon>
            <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Return Date</Name>
    </ItemContainer>
    <Marginer direction="horizontal" margin="2em"/>
    <Button type="button"  buttonType={BUTTON_TYPE_CLASSES.google}>Book Your Ride</Button>
    </CardContainer>)
}

export default BookCard;