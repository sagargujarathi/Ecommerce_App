
import '../../css/Heropage/Heropage.css'
import bannerStage from '../../images/banner-stage.png'
import ad1 from '../../images/ad1.png'
import ad2 from '../../images/ad2.png'
import ad3 from '../../images/ad3.png'
import ad4 from '../../images/ad4.png'

function Heropage() {
    return (
        <>
            <section>
                <div className="hero-page">
                    <div className="banner-content">
                        <span>
                            <p className='h1'>Shopping And</p>
                            <p className='h1'>Department Store.</p>
                        </span>
                        <p className="quote">Shopping is a bit of a relaxing hobby for me, which is <br /> sometimes troubling for the bank balance.</p>
                        <button className='learn-more-button'>Learn More</button>
                    </div>
                    <div className="banner-stage-background">
                        <img src={bannerStage} alt="" />
                        <div className="banner" style={{
                            top: '-25%',
                            left: '55%'
                        }}>
                            <img src={ad1} />
                        </div>
                        <div className="banner" style={{
                            top: '-5%',
                            left: '30%',
                            zIndex: '5'
                        }}>
                            <img src={ad2} />
                        </div>
                        <div className="banner" style={{
                            top: '30%',
                            left: '50%',
                            zIndex: '5'
                        }}>
                            <img src={ad3} />
                        </div>
                        <div className="banner" style={{
                            top: '40%',
                            left: '5%',
                            zIndex: '5'
                        }}>
                            <img src={ad4} />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Heropage