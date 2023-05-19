import "./Button.css"
import PropTypes from "prop-types"

/**
 * React component button
 * @component
 * @param {string} text of the button
 * @param {click} action of the button
 * @returns {button} returns a reusable React button component
 */
const Button = ({text, click}) =>{
    return(
        <button className="button" onClick={click}>{text}</button>
    )
}
Text.PropTypes={
    text: PropTypes.string
}
export default Button