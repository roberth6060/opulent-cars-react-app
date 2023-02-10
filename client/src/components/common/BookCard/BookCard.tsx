import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { Marginer } from "../Marginer/Marginer";
import { CardContainer, Icon, ItemContainer, Name , LineSeperator, DateCalendar, SmallIcon} from "./style/BookCard";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";



const BookCard = ()=> {
    const [startDate, setDStartDate] = useState<Date>(new Date());
    const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false)
 
     const [returnDate, setDreturnDate] = useState<Date>(new Date());
    const [isreturnCalendarOpen, setIsreturnCalendarOpen] = useState(false)

    const toggleStartDateCalendar = ()=> {
        setIsStartCalendarOpen(!isStartCalendarOpen)
        if (isreturnCalendarOpen) setIsreturnCalendarOpen(false);
    }

        const toggleReturnDateCalendar = ()=> {
        setIsreturnCalendarOpen(!isreturnCalendarOpen);
        if (isStartCalendarOpen) setIsStartCalendarOpen(false);
    }
console.log(startDate);
    return (<CardContainer>
    <ItemContainer>
        <Icon>
            <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar }>Pick Up Date</Name>
         <SmallIcon>
            <FontAwesomeIcon icon={isStartCalendarOpen? faCaretUp :  faCaretDown}/>
        </SmallIcon>
       { isStartCalendarOpen && <DateCalendar value={startDate} onChange={setDStartDate}/>}
    </ItemContainer>
    <LineSeperator/>
    <ItemContainer>
        <Icon>
            <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
        <SmallIcon>
            <FontAwesomeIcon icon={isreturnCalendarOpen ? faCaretUp :  faCaretDown}/>
        </SmallIcon>
          { isreturnCalendarOpen && <DateCalendar value={returnDate} onChange={setDreturnDate}/>}
    </ItemContainer>
    <Marginer direction="horizontal" margin="2em"/>
    <Button type="button"  buttonType={BUTTON_TYPE_CLASSES.google}>Book Your Ride</Button>
    </CardContainer>)
}

export default BookCard;