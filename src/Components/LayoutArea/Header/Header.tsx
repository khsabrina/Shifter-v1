import "./Header.css";
import Logo from './../../LogoShifter/LogoShifter'

function Header(): JSX.Element {
    return (
        <div className="Header">
            <Logo/>
            <h1>Northwind Traders</h1>
        </div>
    );
}

export default Header;