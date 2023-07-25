import {Link} from "react-router-dom";
import {HOME} from "../../Routes";

const Header = () => {
    return(
        <header>
            <div className={"logo-container"} >
                <Link to={HOME}>
                    <h1 className={"logo"}>HRnet</h1>
                </Link>
            </div>

        </header>
    )
}
export default Header