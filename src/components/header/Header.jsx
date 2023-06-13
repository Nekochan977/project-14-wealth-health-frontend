import Logo from "../../assets/Logo.png"
import {Link} from "react-router-dom";
import {HOME} from "../../Routes";

const Header = () => {
    return(
        <header>
            <Link to={HOME}>
                <h1>
                    <img className="logo" src={Logo} alt="HRnet logo"/>
                </h1>
            </Link>
        </header>
    )
}
export default Header