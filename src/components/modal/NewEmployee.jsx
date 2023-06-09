import "./NewEmployee.css"
import {states} from "../../utils/stateList";
import {useState} from "react";
import Button from "../button/Button";
import Calendar from "../calendar/Calendar";
import {format} from "date-fns";

// console.log(states)

const NewEmployee = () => {
    const [state, setState] = useState("Alabama")
    const [openCalendar, setOpenCalendar] = useState(false)

    const [currentDate, setCurrentDate] = useState(new Date())

    const handleChange = (event) => {
        setState(event.target.value)
    }

    const showCalendar = () => {
        setOpenCalendar((openCalendar)=> true)
    }
    return(
        <form className={"form"}>
            <div>
                <p>Selected Date: {format(currentDate, "P")}</p>
            </div>
            <div className={"row"}>
                <div className={"input-container"}>
                    <label>First Name</label>
                    <input name={"first-name"} id={"first-name"} type={"text"}/>
                </div>
                <div className={"input-container"}>
                    <label>Last Name</label>
                    <input name={"last-name"} id={"last-name"} type={"text"}/>
                </div>
            </div>
            {/*Test on Calendar*/}
            <div className={"row"}>
                <div className={"input-container"}>
                    <label>Date of Birth</label>
                    {openCalendar === true ?
                        <Calendar value={currentDate} onChange={setCurrentDate} className={"calendar-container"} />
                        :
                        <input name={"birth-date"} id={"birth-date"} type={"text"} onInput={showCalendar}/>
                    }

                </div>
                <div className={"input-container"}>
                    <label>Social Security Number</label>
                    <input name={"SS-nbr"} id={"SS-nbr"} type={"text"}/>
                </div>
            </div>
            <div className={"row"}>
                <div className={"input-container"}>
                    <label>Start Date</label>
                    <input name={"start-date"} id={"start-date"} type={"text"}/>
                </div>
                <div className={"input-container"}>
                    <label>Contract Type</label>
                    <select name={"contract-type"} id={"contract-type"}>
                        <option value={"full-time"}>Full Time</option>
                        <option value={"part-time"}>Part Time</option>
                    </select>
                </div>
            </div>
            <div className={"address-container"}>
                <h3 className={"address-title"}>Address</h3>
                <div className={"address-block"}>
                    <div className={"row"}>
                        <div className={"input-container"}>
                            <label>Street</label>
                            <input name={"street"} id={"street"} type={"text"}/>
                        </div>
                        <div className={"input-container"}>
                            <label>City</label>
                            <input name={"city"} id={"city"} type={"text"}/>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"input-container"}>
                            <label>Zip Code</label>
                            <input name={"zip-code"} id={"zip-code"} type={"text"}/>
                        </div>
                        <div className={"input-container"}>
                            <label>State</label>
                            <select value={state} name={"state"} id={"state"} onChange={handleChange}>
                                {states.map((state)=>(
                                    // (console.log(state))
                                    <option key={state.abbreviation} value={state.name}>{state.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                </div>
            </div>
            <div className={"row"}>
                <div className={"input-container left"}>
                    <label>Department</label>
                    <select name={"department"} id={"department"}>
                        <option value={"full-time"}>Sales</option>
                        <option value={"part-time"}>Marketing</option>
                        <option value={"part-time"}>Human Resources</option>
                        <option value={"part-time"}>Engineering</option>
                        <option value={"part-time"}>Legal</option>
                    </select>
                </div>
            </div>
            <Button text={"Save"}/>
        </form>
    )
}
export default NewEmployee