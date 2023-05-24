import { useNavigate } from "react-router-dom"
import '../css/PaymentPopup.css'
import verified from '../images/verified.png'
function PaymentPopup() {
    const navigate = useNavigate()
    return (
        <div className="blurry-background">
            <div className="payment-popup">
                <img src={verified} width={'30%'} />
                <span className='popup-wrap'>
                    <span className="popup-heading">Your order has been accepted</span>
                    <span className="trans">Transaction ID:{Math.ceil(Math.random() * 1e14)}</span>
                    <button className="button3" onClick={() => setTimeout(() => navigate('/'), 1000)}>Continue Shopping</button>
                </span>
            </div>
        </div>
    )
}

export default PaymentPopup