import '../../css/Footer/Footer.css'
import logo from '../../images/logo.svg'
import { cardImages } from '../Checkout/Checkout'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
function Footer() {
    return (
        <div className="main-wrap-container" style={{ borderTop: '2px solid #D3D2D2', padding: '0 0 2rem 0' }}>
            <div className="footer-container">
                <div className="footer-grid-container-1">
                    <img src={logo} className='footer-logo' />
                    <span className="footer-quote">If you do build a great experience, customers tell each other about that. Word of mouth is very powerful.</span>
                    <div className="card-images">
                        {cardImages.map(card => <div className="checkout-card"><img src={card.card} /></div>)}
                    </div>
                </div>
                <div className="footer-grid-container-2">
                    <div className="footer-grid-heading">Department</div>
                    <ul className="footer-list">
                        <li>Fashion</li>
                        <li>Education Product</li>
                        <li>Frozen Food</li>
                        <li>Beverages</li>
                        <li>Organic Grocery</li>
                        <li>Office Supplies</li>
                        <li>Beauty Products</li>
                        <li>Books</li>
                        <li>Electronics & Gadget</li>
                        <li>Travel Accessories</li>
                        <li>Fitness</li>
                        <li>Sneakers</li>
                        <li>Toys</li>
                        <li>Furniture</li>
                    </ul>
                </div>
                <div className="footer-grid-container-2">
                    <div className="footer-grid-heading">About Us</div>
                    <ul className="footer-list">
                        <li>About Shopcart</li>
                        <li>Careers</li>
                        <li>News & Blog</li>
                        <li>Help</li>
                        <li>Press Center</li>
                        <li>Shop By Location</li>
                        <li>Shopcart Brands</li>
                        <li>Affiliate & Partners</li>
                        <li>Ideas & Guides</li>
                    </ul>
                </div>
                <div className="footer-grid-container-2">
                    <div className="footer-grid-heading">Services</div>
                    <ul className="footer-list">
                        <li>Gift Card</li>
                        <li>Mobile App</li>
                        <li>Shipping & Delivery</li>
                        <li>Order Pickup</li>
                        <li>Account Signup</li>
                    </ul>

                </div>
                <div className="footer-grid-container-2">
                    <div className="footer-grid-heading">Help</div>
                    <ul className="footer-list">
                        <li>Shopcart Help</li>
                        <li>Returns</li>
                        <li>Track Orders</li>
                        <li>Contact Us</li>
                        <li>Feedback</li>
                        <li>Security & Fraud</li>
                    </ul>
                </div>
            </div>
            <div className="secondary-footer">
                <div className="secondary-footer-wrap-container">
                    <span className="secondary-footer-item">
                        <BusinessCenterIcon color='secondary' />Become Seller
                    </span>
                    <span className="secondary-footer-item">
                        <CardGiftcardIcon color='secondary' />Gift Cards
                    </span>
                    <span className="secondary-footer-item">
                        <HelpOutlineIcon color='secondary' />Help Center
                    </span>
                </div>
                <div className="secondary-footer-wrap-container">
                    <span className="secondary-footer-item">
                        Terms of Service
                    </span>
                    <span className="secondary-footer-item">
                        Privacy & Policy
                    </span>
                </div>
                <div className="secondary-footer-wrap-container">
                    <span className="secondary-footer-item">
                        All Right reserved by Sagar Gujarathi | {new Date().getFullYear()}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer