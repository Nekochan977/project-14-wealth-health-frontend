import Modal from "../components/modal/Modal";
import Button from "../components/button/Button";
import NewEmployee from "../components/modal/NewEmployee";
import {useState} from "react";
import {Link} from "react-router-dom";
import {EMPLOYEES} from "../Routes";


const Home = () => {
    // const [isShown, setIsShown] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen((isOpen) => true)
    }
    function close() {
        setIsOpen((isOpen)=>false)
    }
    return (
        <main className="main-container">
            {isOpen === true ?
                <Modal className={"form-container"}>
                    <h2 className={"form-title"}>Create Employee</h2>
                    <Button className={"button right"} text={"X"} click={close}/>
                    <NewEmployee/>
                </Modal>
                :
                <div className="button-container">
                    <Button className={"button"} text={"Create new employee"} click={open}/>
                    <Link to={EMPLOYEES}>
                        <Button className={"button"} text={"View current employees"}/>
                    </Link>


                </div>
            }
        </main>
    )
}
export default Home