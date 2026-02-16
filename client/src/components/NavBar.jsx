import "../styles/navbar.css";
import logoNav from "../media/logocine2.png";

function NavBar() {
    return (
        <nav className='navbar  bg-body-tertiary" '>
            <div className='container-fluid'>
                <a className='navbar-brand' href=''>
                    <img
                        src={logoNav}
                        alt='Logo'
                        className='logo'
                    />
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
