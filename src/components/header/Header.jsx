import Logo from "../../assets/Logo.png"

const Header = () => {
    return(
        <header>
            <h1>
                <img className="logo" src={Logo} alt="HRnet logo"/>
            </h1>
        </header>
    )
}
export default Header