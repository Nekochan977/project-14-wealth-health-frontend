import Button from "../button/Button";

const Modal = ({className, children, onClose}) => {

    return (
        <section className={className}>
            <Button className={"button right"} text={"X"} click={onClose}/>
            {children}
        </section>
    )

}

export default Modal