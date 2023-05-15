
import '../../css/Navbar/Navbar.css'
import logo from '../../images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
function Navbar() {
    const [allowIcon, setAllowIcon] = useState(true)
    const [search, setSearch] = useState(true)
    function handleResize() {
        if (window.innerWidth <= 1000) {
            setAllowIcon(false)
        }
        else {
            setAllowIcon(true)
        }
        if (window.innerWidth <= 900) {
            setSearch(false)
        }
        else {
            setSearch(true)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <>
            <section>
                <div className="nav-bar">
                    <img src={logo} className='logo' />
                    {
                        search ?
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
                            : ''
                    }
                    <div className="account-cart-container">

                        {
                            !search ?
                                <MenuIcon />
                                :
                                <>
                                    <span>
                                        {
                                            allowIcon ? <PersonIcon /> : ''
                                        }
                                        Account
                                    </span>
                                    <span>
                                        {
                                            allowIcon ? <AddShoppingCartIcon /> : ''
                                        }
                                        Cart
                                    </span></>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar