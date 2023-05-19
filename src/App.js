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
import JSONData from "./data.json"
import { useEffect } from "react"
function App() {

  return (
    <>
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
      <div className="main-wrap-container">
        <div className="main-wrap-heading">Todays Best Deals For You!</div>
        <div className="main-wrap-button-container">
          {
            JSONData.map((item) => {
              return <Button1 name={item.sectionName} />
            })
          }

        </div>
        <div className="grid-wrap-container">
          {
            JSONData.map((item) => {
              return item.sectionItems.map((data) => {
                return data.sectionItems.map((product) => {
                  return <StoreItem productData={product} />
                })
              })
            })
          }
        </div>
      </div>
      {/* <ItemPage /> */}
    </>
  )
}

export default App