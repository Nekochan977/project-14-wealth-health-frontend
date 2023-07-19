import Button from "../button/Button";
import PropTypes from 'prop-types';

const Modal = ({className, children, onClose}) => {

    return (
        <section className={className}>
            <Button className={"button right"} text={"X"} click={onClose}/>
            {children}
        </section>
    )

}

export default Modal

Modal.propTypes = {
    className: PropTypes.string,
    children: PropTypes.array,
    onClose: PropTypes.func
}