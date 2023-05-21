import '../../css/ItemPage/ItemPage.css'
import test1 from '../../images/test-image.png'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Button1 from '../Button1';
import Button2 from '../Button2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useEffect, useReducer } from 'react';
function ItemPage({ productData }) {
    function handleDataReducer(state, action) {
        switch (action.type) {
            case 'ChangeMainImage':
                return { ...state, mainImage: action.payload }
            case 'changeColor':
                return { ...state, color: action.payload.color, images: action.payload.images, mainImage: action.payload.images[0] }
            case 'reset':
                return action.payload

        }
    }
    const [data, dispatch] = useReducer(handleDataReducer, { color: productData.itemColor[0].color, images: productData.itemColor[0].images, mainImage: productData.itemColor[0].images[0] })
    useEffect(() => {
        dispatch({ type: 'reset', payload: { color: productData.itemColor[0].color, images: productData.itemColor[0].images, mainImage: productData.itemColor[0].images[0] } })
        document.querySelector('.item-page-container').scrollIntoView()
    }, [productData])
    return (
        <div className="item-page-container">
            <div className="item-wrapper">
                <div className="item-pics">
                    <div className="item-main-pic">
                        <img src={data.mainImage} />
                    </div>
                    <div className="item-pic-carousel">
                        {
                            data.images.map(img => {
                                return <div
                                    className="item-page-item"
                                    onClick={() => dispatch({ type: 'ChangeMainImage', payload: img })}
                                    style={{ border: (data.mainImage == img) ? '1px solid black' : '' }}>
                                    <img src={img} />
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="item-general-details">
                    <div className="general-item-wrap">
                        <span className="item-page-heading">{productData.itemName}</span>
                        <span className="item-page-quote">{productData.itemInfo}</span>
                        <span className="store-item-rating">
                            {
                                productData.itemRating.map(rate => {
                                    switch (rate) {
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
                    </div>
                    <div className="general-item-wrap">
                        <span className="price">${productData.itemPrice} or {Math.ceil(productData.itemPrice / 6)}/month</span>
                        <span className="price-bottom-text">Suggested payments with 6months special financing</span>
                    </div>
                    <div className="general-item-wrap">
                        <span className="choose-a-color">Choose a Color</span>
                        <div className="color-pallette">
                            {
                                productData.itemColor.map(color => {
                                    return <div
                                        className="color"
                                        style={{ backgroundColor: color.hex, border: data.color == color.color ? '2px solid #627F75' : '2px solid transparent' }}
                                        onClick={() => dispatch({ type: 'changeColor', payload: color })}
                                    ></div>
                                })
                            }
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
                                <LocalShippingIcon style={{ color: '#F29A53' }} />
                                Free Delivery
                            </span>
                            <span className="lower-text-in-delivery-option">
                                <u>Enter your Postal code for Delivery Availability</u>
                            </span>
                        </div>
                        <div className="delivery-option">
                            <span className="upper-text-in-delivery-option">
                                <AssignmentReturnedIcon style={{ color: '#F29A53' }} />
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
        </div >
    )
}

export default ItemPage


{/* <Navbar />
      <Heropage />
      <Topcategory />
      <Carousel heading='Todays Best Deals for you!' />
      <div className="main-wrap-container">
        <div className="main-wrap-heading">Shop Our Top Categories</div>
        <div className="brand-card-wrapper">
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
        </div>
      </div>
      <div className="main-wrap-container">
        <div className="main-wrap-heading">Choose By Brand</div>
        <div className="offer-cards-container">
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />

        </div>
      </div> */}