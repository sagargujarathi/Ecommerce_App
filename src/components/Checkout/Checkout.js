import { useEffect, useReducer } from 'react'
import '../../css/Checkout/Checkout.css'
import { useLocation, useNavigate } from 'react-router-dom'
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
import PaymentPopup from '../PaymentPopup'
export const cardImages = [
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
    deliveryOptions: '',
    couponCode: '',
    totalCost: 0,
    discount: 0,
    tax: 0,
    card: '',
    trigger: false,
    deliveryInformation: {
        firstName: '',
        lastName: '',
        address: '',
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
const coupon =
    [
        { code: 'CAT', discount: -111.00 },
        { code: 'MEOW', discount: -90.00 },
        { code: 'NIKOCHAN', discount: -100.20 },
        { code: 'SHOPCART', discount: -51.00 },
        { code: 'GOAT', discount: -99.99 },
        { code: 'TORACHAN', discount: 'free' }

    ]
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
    CVV: 'cvv',
    OPTION: 'option',
    COUPON: 'coupon',
    APPLYCOUPON: 'applycoupon',
    INITIALIZE: 'initialize',
    SELECTCARD: 'selectcard',
    PAYMENTDONE: 'paymentdone'
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
    function verifyData(data) {
        const deliveyInfo = data.deliveryInformation
        if (deliveyInfo.firstName != '' &&
            deliveyInfo.lastName != '' &&
            deliveyInfo.address != '' &&
            deliveyInfo.city != '' &&
            deliveyInfo.zip != '' &&
            deliveyInfo.mobile != '' &&
            deliveyInfo.email != '') {
            if (data.deliveryOptions == 'cash' || data.deliveryOptions == '') {
                if (data.paymentDetails.email != '') {
                    return true
                }
            }
            else if (data.paymentDetails.email != '' &&
                data.paymentDetails.cardHolderName != '' &&
                data.paymentDetails.cardNumber != '' &&
                data.paymentDetails.expiry != '' &&
                data.paymentDetails.cvv != '' &&
                data.card != ''
            ) {
                return true
            }
        }
        return false
    }
    function saveData(data) {
        localStorage.setItem('deliveryInformation', JSON.stringify(data))
    }
    function getData() {
        const data = localStorage.getItem('deliveryInformation')
        if (data != null) {
            return JSON.parse(data)
        }
        return false

    }
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
            case TYPES.OPTION:
                return { ...state, deliveryOptions: payload }
            case TYPES.COUPON:
                return { ...state, couponCode: payload }
            case TYPES.APPLYCOUPON:
                let arr = coupon.filter(c => c.code == state.couponCode)
                if (arr.length > 0) {
                    return { ...state, discount: arr[0].discount }
                }
                return { ...state, discount: 0 }
            case TYPES.INITIALIZE:
                return { ...state, ...payload }
            case TYPES.SELECTCARD:
                return { ...state, card: payload }
            case TYPES.PAYMENTDONE:
                if (verifyData(state)) {
                    saveData(state.deliveryInformation)
                    return { ...state, trigger: payload }
                }
                else {
                    return state
                }
            default:
                return state
        }
    }
    const [data, dispatch] = useReducer(handleData, dataTemplate)
    useEffect(() => {
        if (state != null) {
            const payload = {
                tax: ((Number(state.price) * state.quantity) / 10).toFixed(2),
                totalCost: (Number(state.price) * state.quantity) + Number(((Number(state.price) * state.quantity) / 10).toFixed(2)) + 9
            }
            dispatch({ type: TYPES.INITIALIZE, payload: payload })
            const data = getData()
            if (data != false) {
                dispatch({ type: TYPES.INITIALIZE, payload: { deliveryInformation: data } })
            }
        }
    }, [state])
    return (
        <>
            <div className="main-wrap-checkout-container" style={{ marginTop: '1rem' }}>
                <span className="checkout-location">{`product / ${state.name} / `}<span style={{ fontWeight: '600' }}>checkout</span></span>
                <div className="checkout-container">
                    <div className="item-review-and-shipping">
                        <div className="checkout-heading">Review Item And Shipping</div>
                        <div className="item-review-and-shipping-inner-container">
                            <div className="checkout-image-container">
                                <img src={state.image} />
                            </div>
                            <div className="checkout-item-info">
                                <span className="checkout-name-and-color">
                                    <span className="checkout-name">{state.name}</span>
                                    <span className="checkout-color">Color: {state.color}</span>
                                </span>
                                <span className="checkout-price-and-quantity">
                                    <span className="checkout-price">${state.price}</span>
                                    <span className="checkout-quantity">Quantity: {state.quantity}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="delivery-information">
                        <div className="checkout-heading">Delivery Information</div>
                        <div className="flex-container">
                            <InputContainer
                                name='First Name'
                                placeHolder='Type here...'
                                inputType='text'
                                callBack={{ dispatch, type: TYPES.FIRSTNAME }}
                                value={data.deliveryInformation.firstName}
                            />
                            <InputContainer
                                name='Last Name'
                                placeHolder='Type here...'
                                inputType='text'
                                callBack={{ dispatch, type: TYPES.LASTNAME }}
                                value={data.deliveryInformation.lastName}

                            />
                        </div>
                        <InputContainer
                            name='Address'
                            placeHolder='Type here...'
                            inputType='text'
                            callBack={{ dispatch, type: TYPES.ADDRESS }}
                            value={data.deliveryInformation.address}
                        />
                        <div className="flex-container">
                            <InputContainer
                                name='City/Town'
                                placeHolder='Type here...'
                                inputType='text'
                                callBack={{ dispatch, type: TYPES.CITY }}
                                value={data.deliveryInformation.city}
                            />
                            <InputContainer
                                name='Zip Code'
                                placeHolder='Type here...'
                                inputType='text'
                                callBack={{ dispatch, type: TYPES.ZIP }}
                                value={data.deliveryInformation.zip}
                            />
                        </div>
                        <div className="flex-container">
                            <InputContainer
                                name='Mobile'
                                placeHolder='Type here...'
                                inputType='tel'
                                callBack={{ dispatch, type: TYPES.MOBILE }}
                                value={data.deliveryInformation.mobile}
                            />
                            <InputContainer
                                name='Email'
                                placeHolder='Type here...'
                                inputType='email'
                                callBack={{ dispatch, type: TYPES.D_EMAIL }}
                                value={data.deliveryInformation.email}
                            />
                        </div>
                    </div>
                    <div className="order-summary">
                        <div className="checkout-heading">Order Summary</div>
                        <div className="coupon-container">
                            <input type="text" className='coupon-input' placeholder='Enter coupon code' onChange={e => dispatch({ type: TYPES.COUPON, payload: e.target.value })} />
                            <button className='coupon-button' onClick={() => dispatch({ type: TYPES.APPLYCOUPON })}>Apply coupon</button>
                        </div>
                        <div className="checkout-secondary-heading">Payment Details</div>
                        <div className="payment-details-container">
                            <InputContainer2
                                name='paymentMethod'
                                label='Cash on Delivery'
                                check={true}
                                value={'cash'}
                                callBack={{ dispatch, type: TYPES.OPTION }}
                            />
                            <InputContainer2
                                name='paymentMethod'
                                label='Credit or Debit card'
                                value={'card'}
                                callBack={{ dispatch, type: TYPES.OPTION }}
                            />
                            <div className="card-images">
                                {
                                    (data.deliveryOptions == 'card') &&
                                    cardImages.map(card => {
                                        return <div
                                            className="checkout-card"
                                            style={{ border: (card.name == data.card) ? '2px solid #AAE2A9' : '2px solid transparent' }}
                                            onClick={() => dispatch({ type: TYPES.SELECTCARD, payload: card.name })}
                                        >
                                            <img src={card.card} />
                                        </div>
                                    }
                                    )
                                }
                            </div>
                            <InputContainer
                                name='Email'
                                placeHolder='Type here...'
                                inputType='text'
                                callBack={{ dispatch, type: TYPES.P_EMAIL }}
                            />
                            {(data.deliveryOptions == 'card') &&
                                <>
                                    <InputContainer
                                        name='Card Holder Name'
                                        placeHolder='Type here...'
                                        inputType='text'
                                        callBack={{ dispatch, type: TYPES.CARDHOLDERNAME }}
                                    />
                                    <InputContainer
                                        name='Card Number'
                                        placeHolder='0000*****1245'
                                        inputType='text'
                                        callBack={{ dispatch, type: TYPES.CARDNUMBER }}
                                    />
                                    <div className="flex-container">
                                        <InputContainer
                                            name='Expiry'
                                            inputType='month'
                                            callBack={{ dispatch, type: TYPES.EXPIRY }}
                                        />
                                        <InputContainer
                                            name='CVV'
                                            placeHolder='000'
                                            inputType='password'
                                            callBack={{ dispatch, type: TYPES.CVV }}
                                        />
                                    </div>

                                </>
                            }
                            <div className="final-order-details">
                                <OrderDetails name='Sub Total' cost={`$${(Number(state.price) * state.quantity).toFixed(2)}`} />
                                <OrderDetails name='Tax(10%)' cost={`$${data.tax}`} />
                                <OrderDetails name='Coupon Discount' cost={`-$${-data.discount}`} />
                                <OrderDetails name='Shipping Cost' cost='$9.00' />
                                <div style={{ border: '1px solid #d9d9d9' }}></div>
                                <OrderDetails name='Total' cost={`=$${(data.totalCost + data.discount).toFixed(2)}`} style={{ fontWeight: '800' }} />
                                <Button2
                                    name={data.deliveryOptions == 'card' ? `Pay $${(data.totalCost + data.discount).toFixed(2)}` : 'Order Now'}
                                    style={{ fontWeight: '700', maxWidth: '400px' }}
                                    callBack={dispatch}
                                    type={TYPES.PAYMENTDONE}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {
                (data.trigger) ? <PaymentPopup /> : ''
            }
        </>
    )
}


export default Checkout