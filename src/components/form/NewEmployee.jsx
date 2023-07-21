import "./NewEmployee.css"
import { states, departments, contractTypes} from "../../utils/options";

import {useState} from "react";
import Button from "../button/Button";
import {Calendar} from "react-calendar-component-nekochan"
import { Dropdown } from 'primereact/dropdown';


//redux
import {employeeAdded} from "../../redux/employeeSlice";
import { useDispatch } from "react-redux";
import Modal from "../modal/Modal";


const NewEmployee = ({closeModal}) => {
    const dispatch = useDispatch()

    //states
    const [state, setState] = useState(null)
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [socialNumber, setSocialNumber] = useState("")
    const [contractType, setContractType] = useState(null)
    const [birthDate, setBirthDate] = useState("")
    const [startDate, setStartDate] = useState("")
    const [streetName, setStreetName] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [city, setCity] = useState("")
    const [department, setDepartment] = useState(null)
    const [show, setShow] = useState(false);



    //changing content
    const onFirstNameChanged = (e) => setFirstname(e.target.value)
    const onLastNameChanged = (e) => setLastname(e.target.value)
    const onStateChanged = (e) => setState(e.target.value)
    const onSocialNumberChanged = (e) => setSocialNumber(e.target.value)
    const onContractChanged = (e) => setContractType(e.target.value)
    const onStreetNameChange = (e) => setStreetName(e.target.value)
    const onCityChange = (e) => setCity(e.target.value)
    const onZipCodeChange = (e) => setZipCode(e.target.value)
    const onDepartmentChanged = (e) => setDepartment(e.target.value)

    const handleClickBirthdate = (cnt) => {
        setBirthDate(cnt)
    }
    const handleClickStartDate = (cnt) => {
        setStartDate(cnt)
    }


    const saveNewEmployee = () => {
       if(firstName && lastName && state && streetName && city && state && socialNumber && contractType) {
           dispatch(
                employeeAdded({firstName, lastName, birthDate, startDate, streetName, city, zipCode, state, socialNumber, contractType, department})
           )
           setShow(true)
           setTimeout(()=>{
               closeModal()
           }, 3000)

       }
    }


    return(
        <>
            <form className={"form"} onSubmit={e=>{e.preventDefault()}}>
            <div className={"row"}>
                <div className={"input-container"}>
                    <label htmlFor={"first-name"}>First Name</label>
                    <input name={"first-name"} id={"first-name"} type={"text"} onChange={onFirstNameChanged}/>
                </div>
                <div className={"input-container"}>
                    <label htmlFor={"last-name"}>Last Name</label>
                    <input name={"last-name"} id={"last-name"} type={"text"} onChange={onLastNameChanged}/>
                </div>
            </div>
            <div className={"row"}>
                <div className={"input-container"}>
                    <Calendar ID={'birthDate'} handleMyClick={handleClickBirthdate} text={"Date of Birth"} className={"color"}/>
                </div>
                <div className={"input-container"}>
                    <label htmlFor={"SS-nbr"}>Social Security Number</label>
                    <input name={"SS-nbr"} id={"SS-nbr"} type={"text"} onChange={onSocialNumberChanged}/>
                </div>
            </div>
            <div className={"row"}>
                <div className={"input-container"}>
                    <Calendar ID={"startDate"} handleMyClick={handleClickStartDate} text={"Start Date"} className={"color"} />
                </div>
                <div className={"input-container"}>
                    <label htmlFor={"contractType"}>Contract Type</label>
                    <Dropdown
                        inputId={"contractType"}
                        value={contractType}
                        onChange={onContractChanged}
                        options={contractTypes}
                        optionLabel="label"
                        placeholder="Select a contract type"
                        className="select"
                    />
                </div>
            </div>
            <div className={"address-container"}>
                <h3 className={"address-title"}>Address</h3>
                <div className={"address-block"}>
                    <div className={"row"}>
                        <div className={"input-container"}>
                            <label htmlFor={"street"}>Street</label>
                            <input name={"street"} id={"street"} type={"text"} onChange={onStreetNameChange}/>
                        </div>
                        <div className={"input-container"}>
                            <label htmlFor={"city"}>City</label>
                            <input name={"city"} id={"city"} type={"text"} onChange={onCityChange}/>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"input-container"}>
                            <label htmlFor={"zip-code"}>Zip Code</label>
                            <input name={"zip-code"} id={"zip-code"} type={"text"} onChange={onZipCodeChange}/>
                        </div>
                        <div className={"input-container"}>
                            <label htmlFor={"state"}>State</label>
                            <Dropdown
                                value={state}
                                onChange={onStateChanged}
                                options={states}
                                optionLabel="name"
                                placeholder="Select a State"
                                className="select"
                                inputId="state"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className={"input-container left"}>
                    <label htmlFor={"department"}>Department</label>
                    <Dropdown
                        inputId={"department"}
                        value={department}
                        onChange={onDepartmentChanged}
                        options={departments}
                        optionLabel="label"
                        placeholder="Select a department"
                        className="select"
                    />
                </div>
            </div>
            <Button className={"button save-button"} text={"Save"} click={saveNewEmployee} />
        </form>
            {show&&
                <Modal className={"pop-up-modal"} show={show} onClose={() => setShow(false)}>
                    <p className={"pop-up-text"}>Employee successfully added!</p>
                </Modal>
            }
        </>
    )
}
export default NewEmployee