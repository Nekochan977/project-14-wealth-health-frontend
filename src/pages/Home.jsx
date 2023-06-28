import Modal from "../components/modal/Modal";
import Button from "../components/button/Button";
import NewEmployee from "../components/modal/NewEmployee";
import {useState} from "react";
import {Link} from "react-router-dom";
import {EMPLOYEES} from "../Routes";


const Home = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <main className="main-container">
            {showModal === true ?
                <Modal className={"form-container"} onClose={() => setShowModal(false)}>
                    <h2 className={"form-title"}>Create Employee</h2>
                    <NewEmployee/>
                </Modal>
                :
                <div className="button-container">
                    <Button className={"button"} text={"Create new employee"} click={() => setShowModal(true)}/>
                    <Link to={EMPLOYEES}>
                        <Button className={"button"} text={"View current employees"}/>
                    </Link>
                </div>
            }
        </main>
    )
}
export default Home