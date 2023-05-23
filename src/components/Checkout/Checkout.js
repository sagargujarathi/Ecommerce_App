import { useEffect, useReducer, useState } from 'react'
import '../../css/Checkout/Checkout.css'
import { useLocation } from 'react-router-dom'
import testImg from './../../images/test-image.png'
import card1 from '../../images/amazon.png'
import card2 from '../../images/gpay.png'
import card3 from '../../images/ipay.png'
import card4 from '../../images/paypal.png'
import card5 from '../../images/klarna.png'
import card6 from '../../images/mastercard.png'
import card7 from '../../images/visa.png'
import card8 from '../../images/stripe.png'
import Button2 from '../Button2'
import InputContainer from '../InputContainer'
import InputContainer2 from '../InputContainer2'
const cardImages = [
    { card: card1, name: 'Amazon' },
    { card: card2, name: 'Gpay' },
    { card: card3, name: 'Applepay' },
    { card: card4, name: 'Paypal' },
    { card: card5, name: 'Llarna' },
    { card: card6, name: 'Mastercard' },
    { card: card7, name: 'Visa' },
    { card: card8, name: 'Stripe' }
]
const dataTemplate = {
    deliveryOptions: false,
    deliveryInformation: {
        firstName: '',
        lastName: '',
        Address: '',
        city: '',
        zip: '',
        mobile: '',
        email: '',
    },
    paymentDetails: {
        email: '',
        cardHolderName: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    }

}
export const TYPES = {
    FIRSTNAME: 'firstname',
    LASTNAME: 'lastname',
    ADDRESS: 'address',
    CITY: 'city',
    ZIP: 'ZIP',
    MOBILE: 'mobile',
    D_EMAIL: 'd_email',
    P_EMAIL: 'p_email',
    CARDHOLDERNAME: 'cardholdername',
    CARDNUMBER: 'cardnumber',
    EXPIRY: 'expiry',
    CVV: 'cvv'
}
function OrderDetails({ name, cost, style }) {
    return (
        <div className="final-order-item" style={style}>
            <span>{name}</span>
            <span>{cost}</span>
        </div>
    )
}
function Checkout() {
    const { state } = useLocation()
    function handleData(state, { type, payload }) {
        switch (type) {
            case TYPES.FIRSTNAME:
                return { ...state, deliveryInformation: { ...state.deliveryInformation, firstName: payload } }
            case TYPES.LASTNAME:
                return { ...state, deliveryInformation: { ...state.deliveryInformation, lastName: payload } }
            case TYPES.ADDRESS:
                return { ...state, deliveryInformation: { ...state.deliveryInformation, address: payload } }
            case TYPES.CITY:
                return { ...state, deliveryInformation: { ...state.deliveryInformation, city: payload } }
            case TYPES.ZIP:
                return { ...state, deliveryInformation: { ...state.deliveryInformation, zip: payload } }
            case TYPES.MOBILE:
                return { ...state, deliveryInformation: { ...state.deliveryInformation, mobile: payload } }
            case TYPES.D_EMAIL:
                return { ...state, deliveryInformation: { ...state.deliveryInformation, email: payload } }
            case TYPES.P_EMAIL:
                return { ...state, paymentDetails: { ...state.paymentDetails, email: payload } }
            case TYPES.CARDHOLDERNAME:
                return { ...state, paymentDetails: { ...state.paymentDetails, cardHolderName: payload } }
            case TYPES.CARDNUMBER:
                return { ...state, paymentDetails: { ...state.paymentDetails, cardNumber: payload } }
            case TYPES.EXPIRY:
                return { ...state, paymentDetails: { ...state.paymentDetails, expiry: payload } }
            case TYPES.CVV:
                return { ...state, paymentDetails: { ...state.paymentDetails, cvv: payload } }
            default:
                return state
        }
    }
    const [data, dispatch] = useReducer(handleData, dataTemplate)
    return (
        <div className="main-wrap-container" style={{ marginTop: '1rem' }}>
            <span className="checkout-location">{`product / ${state.name} / `}<span style={{ fontWeight: '600' }}>checkout</span></span>
            <div className="checkout-container">
                <div className="item-review-and-shipping">
                    <div className="checkout-heading">Review Item And Shipping</div>
                    <div className="item-review-and-shipping-inner-container">
                        <div className="checkout-image-and-name">
                            <div className="checkout-image-container">
                                <img src={state.image} />
                            </div>
                            <span className="checkout-name-and-color">
                                <span className="checkout-name">{state.name}</span>
                                <span className="checkout-color">Color: {state.color}</span>
                            </span>
                        </div>
                        <span className="checkout-price-and-quantity">
                            <span className="checkout-price">${state.price}</span>
                            <span className="checkout-quantity">Quantity: {state.quantity}</span>
                        </span>
                    </div>
                </div>
                <div className="delivery-information">
                    <div className="checkout-heading">Delivery Information</div>
                    <div className="flex-container">
                        <InputContainer name='First Name' placeHolder='Type here...' inputType='text' />
                        <InputContainer name='Last Name' placeHolder='Type here...' inputType='text' />
                    </div>
                    <InputContainer name='Address' placeHolder='Type here...' inputType='text' />
                    <div className="flex-container">
                        <InputContainer name='City/Town' placeHolder='Type here...' inputType='text' />
                        <InputContainer name='Zip Code' placeHolder='Type here...' inputType='text' />
                    </div>
                    <div className="flex-container">
                        <InputContainer name='Mobile' placeHolder='Type here...' inputType='tel' />
                        <InputContainer name='Email' placeHolder='Type here...' inputType='email' />
                    </div>
                </div>
                <div className="order-summary">
                    <div className="checkout-heading">Order Summary</div>
                    <div className="coupon-container">
                        <input type="text" className='coupon-input' placeholder='Enter coupon code' />
                        <button className='coupon-button'>Apply coupon</button>
                    </div>
                    <div className="checkout-secondary-heading">Payment Details</div>
                    <div className="payment-details-container">
                        <InputContainer2 name='paymentMethod' label='Cash on Delivery' check={true} value={'cash'} />
                        <InputContainer2 name='paymentMethod' label='Credit or Debit card' value={'card'} />
                        <div className="card-images">
                            {cardImages.map(card => <div className="checkout-card"><img src={card.card} /></div>)}
                        </div>
                        <InputContainer name='Email' placeHolder='Type here...' inputType='text' />
                        <InputContainer name='Card Holder Name' placeHolder='Type here...' inputType='text' />
                        <InputContainer name='Card Number' placeHolder='0000*****1245' inputType='text' />
                        <div className="flex-container">
                            <InputContainer name='Expiry' inputType='month' />
                            <InputContainer name='CVV' placeHolder='000' inputType='password' />
                        </div>
                        <div className="final-order-details">
                            <OrderDetails name='Sub Total' cost={state.price} />
                            <OrderDetails name='Tax(10%)' cost={(Number(state.price) / 10).toFixed(2)} />
                            <OrderDetails name='Coupon Discount' cost='$549.00' />
                            <OrderDetails name='Shipping Cost' cost='$549.00' />
                            <div style={{ border: '1px solid #d9d9d9' }}></div>
                            <OrderDetails name='Total' cost='=$549.00' style={{ fontWeight: '800' }} />
                            <Button2 name='Pay $494.10' style={{ fontWeight: '700' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Checkout