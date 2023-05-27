import Cell from "./Cell";
import {differenceInDays, endOfMonth, getMonth, startOfMonth} from "date-fns";
import {array} from "prop-types";

const weekDays = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun" ]

const Calendar = ({className, value = new Date(), onChange}) => {
    const startDate = startOfMonth(value)
    const endDate = endOfMonth(value)
    const numDays = differenceInDays(endDate, startDate) +1

    const prefixDays = startDate.getDay() -1
    const suffixDays = 7 - endDate.getDay()
    console.log(prefixDays)

    console.log(value)

    return(
        <div className={className}>
            <div className={"grid grid-cols-7 items-center justify-center text-center"}>
                <Cell className={"top-cell"}>{"<<"}</Cell>
                <Cell className={"top-cell"}>{"<"}</Cell>
                <Cell className={"top-cell col-span-3"}>{"May 2023"}</Cell>
                <Cell className={"top-cell"}>{">"}</Cell>
                <Cell className={"top-cell"}>{">>"}</Cell>

                {weekDays.map((day) => (
                    <Cell key={day} className={"day-cell"}>{day}</Cell>
                ))}

                {Array.from({length: prefixDays}).map((_, index)  => {
                   return( <Cell/>)
                })}

                {Array.from({length : numDays}).map((_, index) =>{
                    const date = index +1
                    return(<Cell key={date}>{date}</Cell>)
                })}

                {Array.from({length: suffixDays}).map((_, index)  => {
                    return( <Cell/>)
                })}


            </div>
        </div>
    )
}

export default Calendar