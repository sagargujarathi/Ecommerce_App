import '../../css/ItemPage/ItemPage.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Button2 from '../Button2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useContext, useEffect, useReducer } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { themeContext } from '../../App';
function ItemPage() {
    const context = useContext(themeContext)
    const handleDataReducer = (state, { type, payload }) => {
        switch (type) {
            case 'ChangeMainImage':
                return { ...state, mainImage: payload }
            case 'changeColor':
                return {
                    ...state,
                    color: payload.color,
                    images: payload.images,
                    mainImage: payload.images[0],
                    itemLeft: payload.itemLeft,
                    quantitySelected: (state.quantitySelected > payload.itemLeft) ? payload.itemLeft : state.quantitySelected
                }
            case 'changeQuantity':
                return {
                    ...state,
                    quantitySelected: (state.quantitySelected + payload < 0) ?
                        0 : (state.quantitySelected + payload > state.itemLeft) ? state.itemLeft : state.quantitySelected + payload
                }
            case 'reset':
                return payload
        }
    }
    const { state } = useLocation()
    const [data, dispatch] = useReducer(handleDataReducer, '')
    const navigate = useNavigate()
    useEffect(() => {
        if (state == null) {
            navigate('/')
        }
        else {
            let payload = {
                ...state,
                color: state.itemColor[0].color,
                images: state.itemColor[0].images,
                mainImage: state.itemColor[0].images[0],
                itemLeft: state.itemColor[0].itemLeft,
                quantitySelected: 1
            }
            dispatch({ type: 'reset', payload })
            document.querySelector('.item-page-container').scrollIntoView()
        }
    }, [state])
    return (
        <div className="item-page-container">
            {
                (data != '') ?
                    <>
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
                                    <span className="item-page-heading">{data.itemName}</span>
                                    <span className="item-page-quote">{data.itemInfo}</span>
                                    <span className="store-item-rating">
                                        {
                                            data.itemRating.map(rate => {
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
                                        <span className="review-count">({data.itemReviewCount})</span>
                                    </span>
                                </div>
                                <div className="general-item-wrap">
                                    <span className="price">${data.itemPrice} or {Math.ceil(data.itemPrice / 6)}/month</span>
                                    <span className="price-bottom-text">Suggested payments with 6months special financing</span>
                                </div>
                                <div className="general-item-wrap">
                                    <span className="choose-a-color">Choose a Color</span>
                                    <div className="color-pallette">
                                        {
                                            data.itemColor.map(color => {
                                                return <div
                                                    className="color"
                                                    style={{ backgroundColor: color.hex, border: data.color == color.color ? '2px solid #627F75' : '2px solid transparent' }}
                                                    onClick={() => dispatch({ type: 'changeColor', payload: color })}
                                                ></div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="item-quantity">
                                    <div className="quantity-button">
                                        <div className="minus" onClick={() => dispatch({ type: 'changeQuantity', payload: -1 })}><RemoveIcon /></div>
                                        <div className="quantity">{data.quantitySelected}</div>
                                        <div className="plus" onClick={() => dispatch({ type: 'changeQuantity', payload: 1 })}><AddIcon /></div>
                                    </div>
                                    <span className="quantity-info">
                                        Only <span className="quantity-color">{data.itemLeft} Items</span> Left!
                                        <br />
                                        Don't miss it
                                    </span>
                                </div>
                                <div className="item-page-buy-options">
                                    <div className="item-page-individual"></div>
                                    <div className="item-page-individual">
                                        <Link to='checkout' style={{ display: 'contents' }} state={{
                                            name: data.itemName,
                                            image: data.images[0],
                                            quantity: data.quantitySelected,
                                            color: data.color,
                                            price: data.itemPrice
                                        }}>
                                            <Button2 name='Buy Now' />
                                        </Link>
                                        <button className="button-2" onClick={() => context(state)}>
                                            Add to Cart
                                        </button>
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
                    </>
                    : ''
            }
        </div >
    )
}

export default ItemPage
