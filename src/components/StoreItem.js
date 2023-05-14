import '../css/StoreItem.css'
import image from '../images/test-image.png'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function StoreItem() {
    return (
        <>
            <div className="store-item">
                <div className="store-item-image">
                    <img src={image} alt="" width='100%' />
                </div>
                <div className="store-item-content">
                    <div className="store-item-name-price">
                        <span className="store-item-name">AirPods Max</span>
                        <span className="store-item-price"><sup>$</sup>599<sup>.00</sup></span>
                    </div>
                    <p className="store-item-info">A perfect balance of high-fidelity audio</p>
                    <span className="store-item-rating">
                        <StarIcon fontSize='small' />
                        <StarIcon fontSize='small' />
                        <StarIcon fontSize='small' />
                        <StarBorderIcon fontSize='small' />
                        <StarBorderIcon fontSize='small' />
                        <span className="review-count">(210)</span>
                    </span>
                    <button className="store-item-add-to-cart">Add to Cart</button>
                </div>
                <span className="store-item-like">
                    <FavoriteBorderIcon fontSize='small' />
                </span>
            </div>
        </>
    )
}

export default StoreItem