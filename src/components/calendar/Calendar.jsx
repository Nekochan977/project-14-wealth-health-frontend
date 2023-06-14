import Cell from "./Cell";
import {add, differenceInDays, endOfMonth, format, setDate, startOfMonth, sub} from "date-fns";
import {useState} from "react";
import {number} from "prop-types";

const weekDays = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun" ]




const Calendar = ({className, value = new Date(), onChange}) => {
    const [openCalendar, setOpenCalendar] = useState(false)

    const [currentDate, setCurrentDate] = useState(new Date())

    const showCalendar = () => {
        setOpenCalendar((openCalendar)=> true)
    }

    const startDate = startOfMonth(value)
    const endDate = endOfMonth(value)
    const numDays = differenceInDays(endDate, startDate) +1

    const prefixDays = startDate.getDay() -1
    const suffixDays = 7 - endDate.getDay()

    const prevMonth = () => onChange(sub(value, {months: 1}))
    const nextMonth = () => onChange(add(value, {months: 1}))
    const prevYear = () => onChange(sub(value, {years: 1}))
    const nextYear = () => onChange(add(value, {years: 1}))

    const handleClickDate = ( index) => {
        const date = setDate(value, index)
        onChange && onChange(date)
        console.log(value)
        console.log(index)
        console.log(date)
        setCurrentDate(date)
        setOpenCalendar(false)
    }

    return(
        <div>
        {openCalendar === true ?
            <div className={className}>
                <div className={"grid grid-cols-7 items-center justify-center text-center"}>
                    <Cell className={"top-cell"} onClick={prevYear}>{"<<"}</Cell>
                    <Cell className={"top-cell"} onClick={prevMonth}>{"<"}</Cell>
                    <Cell className={"top-cell col-span-3"}>{format(value, "LLLL yyyy")}</Cell>
                    <Cell className={"top-cell"} onClick={nextMonth}>{">"}</Cell>
                    <Cell className={"top-cell"} onClick={nextYear}>{">>"}</Cell>

                    {weekDays.map((day) => (
                        <Cell key={day} className={"day-cell"}>{day}</Cell>
                    ))}

                    {Array.from({length: prefixDays}).map((_, index)  => {
                        return( <Cell key={index}/>)
                    })}

                    {Array.from({length : numDays}).map((_, index) =>{

                        const date = index +1
                        return(<Cell key={date} className={"hover:bg-gray-100 active:bg-violet-400 "} onClick={()=> handleClickDate(date, index+1)}>{date}</Cell>)
                    })}

                    {Array.from({length: suffixDays}).map((_, index)  => {
                        return( <Cell key={index}/>)
                    })}
                </div>
            </div>
            :
            <div>
                <p onClick={showCalendar}>{format(currentDate, "P")}</p>
            </div>
        }
        </div>


    )
}

export default Calendar