import testImg from '../images/test-4.png'
import '../css/BrandCard.css'
function BrandCard() {
    return (
        <>
            <div className="brand-card">
                <div className="brand-img-container">
                    <img src={testImg} />
                </div>
                <div className="brand-container">
                    <span className="brand-heading">Sprouts</span>
                    <span className="brand-quote">Delivery with in 24 hours</span>
                </div>
            </div>
        </>
    )
}

export default BrandCard