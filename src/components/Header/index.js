import logosvg from '../../svg/logo.svg';

function Header() {

    const descLogo = "This is logo of Blog."

    return (
       <>
        <header className="flex-space-between">
            <div className="logo">
                <img src={logosvg} alt={descLogo}/>
            </div>

            <div className="search">
                <input  className="input-search" type="text" name="search" placeholder="Search a article"></input>
            </div>

            <div className="menu">
                <ul>
                    <li><a href="#" className="nav-link"> Categories</a></li>
                    <li><a href="#" className="nav-link"> About</a></li>
                    <li><a href="#" className="nav-link"> Contact</a></li>

                </ul>
            </div>

        </header>
       </>
    );
}

export default Header;