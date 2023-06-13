import Cell from "./Cell";
import {add, differenceInDays, endOfMonth, format, setDate, startOfMonth, sub} from "date-fns";
import {useState} from "react";

const weekDays = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun" ]

export const getDateValue = (e, value = new Date()) => {
    const date = setDate(value, e.target.innerHTML)
    const formatedDate = format(date, "P")
    console.log(formatedDate)
}

const Calendar = ({className, value = new Date(), onChange}) => {

    const startDate = startOfMonth(value)
    const endDate = endOfMonth(value)
    const numDays = differenceInDays(endDate, startDate) +1

    const prefixDays = startDate.getDay() -1
    const suffixDays = 7 - endDate.getDay()

    const prevMonth = () => onChange(sub(value, {months: 1}))
    const nextMonth = () => onChange(add(value, {months: 1}))
    const prevYear = () => onChange(sub(value, {years: 1}))
    const nextYear = () => onChange(add(value, {years: 1}))

    return(
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
                    return(<Cell key={date} className={"hover:bg-gray-100 active:bg-violet-400 "} onClick={getDateValue}>{date}</Cell>)
                })}

                {Array.from({length: suffixDays}).map((_, index)  => {
                    return( <Cell key={index}/>)
                })}
            </div>
        </div>
    )
}

export default Calendar