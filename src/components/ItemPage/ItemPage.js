import '../../css/ItemPage/ItemPage.css'
import test1 from '../../images/test-image.png'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Button1 from '../Button1';
import Button2 from '../Button2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
function ItemPage() {
    return (
        <div className="item-page-container">
            <div className="item-wrapper">
                <div className="item-pics">
                    <div className="item-main-pic">
                        <img src={test1} />
                    </div>
                    <div className="item-pic-carousel">
                        <div className="item-page-item">
                            <img src={test1} />
                        </div>
                        <div className="item-page-item">
                            <img src={test1} />
                        </div>
                        <div className="item-page-item">
                            <img src={test1} />
                        </div>
                        <div className="item-page-item">
                            <img src={test1} />
                        </div>
                    </div>
                </div>
                <div className="item-general-details">
                    <div className="general-item-wrap">
                        <span className="item-page-heading">AirPods- Max</span>
                        <span className="item-page-quote">a perfect balance of exhilarating high-fidelity audio and the effortness magic of airpods</span>
                        <span className="store-item-rating">
                            <StarIcon fontSize='small' />
                            <StarIcon fontSize='small' />
                            <StarIcon fontSize='small' />
                            <StarBorderIcon fontSize='small' />
                            <StarBorderIcon fontSize='small' />
                            <span className="review-count">(210)</span>
                        </span>
                    </div>
                    <div className="general-item-wrap">
                        <span className="price">$549 or 99.99/month</span>
                        <span className="price-bottom-text">Suggested payments with 6months special financing</span>
                    </div>
                    <div className="general-item-wrap">
                        <span className="choose-a-color">Choose a Color</span>
                        <div className="color-pallette">
                            <div className="color"></div>
                            <div className="color"></div>
                            <div className="color"></div>
                            <div className="color"></div>
                            <div className="color"></div>
                        </div>
                    </div>
                    <div className="item-page-buy-options">
                        <div className="item-page-individual"></div>
                        <div className="item-page-individual">
                            <Button2 name='Buy Now' />
                            <Button2 name='Add to Cart' />
                        </div>
                    </div>
                    <div className="delivery-options-container">
                        <div className="delivery-option">
                            <span className="upper-text-in-delivery-option">
                                <LocalShippingIcon />
                                Free Delivery
                            </span>
                            <span className="lower-text-in-delivery-option">
                                <u>Enter your Postal code for Delivery Availability</u>
                            </span>
                        </div>
                        <div className="delivery-option">
                            <span className="upper-text-in-delivery-option">
                                <AssignmentReturnedIcon />
                                Return Delivery
                            </span>
                            <span className="lower-text-in-delivery-option">
                                Free 30days Delivery Returns. <u>Details</u>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-details"></div>
        </div>
    )
}

export default ItemPage