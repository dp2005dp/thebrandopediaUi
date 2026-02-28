import "./index.css";                                                    

const Navbar = () => (
    <nav className="navbar">
           <div className="flex-container">
                <h1 className="shop">SHOP</h1>
                <img src="/thebrandopediaUi/iconsAndlogs/35.svg" className="menu-icon" alt="menu icon" />
           </div>
           
            <img src="/thebrandopediaUi/images/1.jpeg"  className="logo" alt="logo"  />

            <div className="flex-container">
                <img src="/thebrandopediaUi/iconsAndlogs/37.svg" className="icons" alt="search icon" />
                <img src="/thebrandopediaUi/iconsAndlogs/38.svg" className="icons" alt="cart icon" />
            </div>
    </nav>
)

export default Navbar; 