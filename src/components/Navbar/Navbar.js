
import '../../css/Navbar/Navbar.css'
import logo from '../../images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Navbar() {
    return (
        <>
            <section>
                <div className="nav-bar">
                    <img src={logo} className='logo' />
                    <div className="navigation">
                        <ul className="links-container">
                            <li className="link">Category</li>
                            <li className="link">Deals</li>
                            <li className="link">What's New</li>
                            <li className="link">Delivery</li>
                        </ul>
                        <div className="search-bar-container">
                            <input type="text" className='search-bar' placeholder='Search Product' />
                            <SearchIcon />
                        </div>
                    </div>
                    <div className="account-cart-container">
                        <span><PersonIcon /> Account</span>
                        <span><AddShoppingCartIcon /> Cart</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar