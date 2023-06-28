import "./NewEmployee.css"
import {states} from "../../utils/stateList";
import {useState} from "react";
import Button from "../button/Button";
import Calendar from "../calendar/Calendar";

//redux
import {employeeAdded} from "../../redux/employeeSlice";
import { useDispatch, useSelector } from "react-redux";


const NewEmployee = () => {
    const dispatch = useDispatch()

    const [state, setState] = useState("Alabama")
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [socialNumber, setSocialNumber] = useState("")
    const [contractType, setContractType] = useState("Full Time")


    //changing content
    const onFirstNameChanged = (e) => setFirstname(e.target.value)
    const onLastNameChanged = (e) => setLastname(e.target.value)
    const onStateChanged = (e) => setState(e.target.value)
    const onSocialNumberChanged = (e) => setSocialNumber(e.target.value)

    const onContractChanged = (e) => setContractType(e.target.value)



    const saveNewEmployee = () => {
        // e.preventDefault()
       if(firstName && lastName && state) {
           dispatch(
                employeeAdded({firstName, lastName, state, socialNumber, contractType})
           )
       }
    }

    const canSave = Boolean(firstName) && Boolean(lastName) && Boolean(state) && Boolean(socialNumber) && Boolean(contractType)


    return(
        <form className={"form"} onSubmit={e=>{e.preventDefault()}}>
            <div className={"row"}>
                <div className={"input-container"}>
                    <label>First Name</label>
                    <input name={"first-name"} id={"first-name"} type={"text"} onChange={onFirstNameChanged}/>
                </div>
                <div className={"input-container"}>
                    <label>Last Name</label>
                    <input name={"last-name"} id={"last-name"} type={"text"} onChange={onLastNameChanged}/>
                </div>
            </div>
            {/*Test on Calendar*/}
            <div className={"row"}>
                <div className={"input-container"}>
                    <Calendar text={"Date of Birth"} className={"color"}/>
                </div>
                <div className={"input-container"}>
                    <label>Social Security Number</label>
                    <input name={"SS-nbr"} id={"SS-nbr"} type={"text"} onChange={onSocialNumberChanged}/>
                </div>
            </div>
            <div className={"row"}>
                <div className={"input-container"}>
                    <Calendar text={"Start Date"} className={"color"} />
                </div>
                <div className={"input-container"}>
                    <label>Contract Type</label>
                    <select name={"contract-type"} id={"contract-type"} onChange={onContractChanged}>
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
                            <select value={state} name={"state"} id={"state"} onChange={onStateChanged}>
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
            <Button className={"button save-button"} text={"Save"} click={saveNewEmployee} disabled={!canSave}/>
        </form>
    )
}
export default NewEmployee