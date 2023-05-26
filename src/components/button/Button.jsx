import "./Button.css"
import PropTypes from "prop-types"

/**
 * React component button
 * @component
 * @param {string} text of the button
 * @param {string} className of the button
 * @param {click} action of the button
 * @returns {button} returns a reusable React button component
 */
const Button = ({text, click, className }) =>{
    return(
        <button className={className} onClick={click}>{text}</button>
    )
}
// eslint-disable-next-line react/no-typos
Button.propTypes={
    text: PropTypes.string,
    className: PropTypes.string
}
export default Button