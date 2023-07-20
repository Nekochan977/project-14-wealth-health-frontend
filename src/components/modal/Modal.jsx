import Button from "../button/Button";
import PropTypes from 'prop-types';

const Modal = ({className, children, onClose}) => {

    return (
        <div className={className}>
            <Button className={"button right"} text={"X"} click={onClose}/>
            {children}
        </div>
    )

}

export default Modal

Modal.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    onClose: PropTypes.func
}