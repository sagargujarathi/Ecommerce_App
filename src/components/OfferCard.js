import '../css/OfferCard.css'
import testImg from '../images/test-5.png'
function OfferCard() {
    return (
        <>
            <div className="offer-card">
                <div className="offer-card-top">
                    <span className="save-text">Save</span>
                    <span className="offer-card-price"><sup>$</sup>500</span>
                    <span className="offer-card-quote">Explore Our Furniture & Home Furnishing Range</span>
                </div>
                <div className="offer-card-bottom">
                    <img src={testImg} />
                </div>
            </div>
        </>
    )
}

export default OfferCard