import Heropage from "./components/Heropage/Heropage"
import Navbar from "./components/Navbar/Navbar"
import StoreItem from "./components/StoreItem"
import Topcategory from "./components/TopCategory/Topcategory"
import Carousel from './components/Carousel/Carousel'
import './css/App.css'
import BrandCard from "./components/BrandCard"
import OfferCard from "./components/OfferCard"
import Button1 from "./components/Button1"
import ItemPage from "./components/ItemPage/ItemPage"
function App() {
  return (
    <>
      <Navbar />
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
      </div>
      <div className="main-wrap-container">
        <div className="main-wrap-heading">Todays Best Deals For You!</div>
        <div className="main-wrap-button-container">
          <Button1 name='Gadgets' />
          <Button1 name='Fashion' />
          <Button1 name='Toys' />
          <Button1 name='Education' />
          <Button1 name='Beauty' />
          <Button1 name='Fitness' />
          <Button1 name='Furniture' />
          <Button1 name='Sneakers' />

        </div>
        <div className="temp">
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
        </div>
      </div>
      <ItemPage />
    </>
  )
}

export default App