import "./Button.css"
import PropTypes from "prop-types"

/**
 * React component button
 * @component
 * @param {string} text of the button
 * @returns {button} returns a reusable React button component
 */
const Button = ({text}) =>{
    return(
        <button className="button">{text}</button>
    )
}
Text.PropTypes={
    text: PropTypes.string
}
export default Button