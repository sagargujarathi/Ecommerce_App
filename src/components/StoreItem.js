import '../css/StoreItem.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useContext } from 'react';
import { themeContext } from '../App'
function StoreItem({ productData }) {
    const context = useContext(themeContext)
    return (
        <>
            <div className="store-item">
                <div className="store-item-image">
                    <img src={productData.itemMainImage} width='100%' />
                </div>
                <div className="store-item-content">
                    <div className="store-item-name-price">
                        <span className="store-item-name">{productData.itemName}</span>
                        <span className="store-item-price"><sup>$</sup>{productData.itemPrice.slice(0, productData.itemPrice.indexOf('.'))}<sup>{productData.itemPrice.slice(productData.itemPrice.indexOf('.'))}</sup></span>
                    </div>
                    <p className="store-item-info">{(productData.itemInfo.length > 85) ? productData.itemInfo.slice(0, 85) + "...." : productData.itemInfo}</p>
                    <span className="store-item-rating">
                        {
                            productData.itemRating.map(point => {
                                switch (point) {
                                    case 0:
                                        return <StarBorderIcon fontSize='small' />

                                    case 1:
                                        return <StarIcon fontSize='small' />
                                    default:
                                        return <StarHalfIcon fontSize='small' />
                                }
                            })
                        }
                        <span className="review-count">({productData.itemReviewCount})</span>
                    </span>
                    <button className="store-item-add-to-cart" onClick={(e) => {
                        e.preventDefault()
                        context(productData)
                    }}>Add to Cart</button>
                </div>
                <span className="store-item-like">
                    <FavoriteBorderIcon fontSize='small' />
                </span>
            </div>
        </>
    )
}

export default StoreItem