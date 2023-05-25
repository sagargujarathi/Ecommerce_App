import Heropage from "./components/Heropage/Heropage"
import Navbar from "./components/Navbar/Navbar"
import Carousel from './components/Carousel/Carousel'
import './css/App.css'
import ItemPage from "./components/ItemPage/ItemPage"
import JSONData from "./data.json"
import carouselData from './carouselData.json'
import { Routes, Route } from 'react-router-dom'
import StoreItemPage from "./components/StoreItemPage"
import Checkout from "./components/Checkout/Checkout"
import Footer from './components/Footer/Footer'
import { useState } from "react"
function App() {
  const [addToCart, setAddToCart] = useState(0)
  return (
    <>
      <Navbar productData={JSONData} />
      <Routes>
        <Route path="/" element={
          <>
            <Heropage />
            <div className="main-wrap-container">
              <div className="main-wrap-heading">Similar Items You Might Like</div>
              <Carousel productData={carouselData[0].sectionItems} />
            </div>
            <StoreItemPage data={JSONData} button={true} heading={'Todays deals'} />
          </>} />
        <Route path="/product/:name" element={
          <><ItemPage />
            <div className="main-wrap-container">
              <div className="main-wrap-heading">Similar Items You Might Like</div>
              <Carousel productData={carouselData[0].sectionItems} />
            </div>
            <StoreItemPage data={JSONData} button={true} heading={'Todays deals'} />
          </>
        } />
        <Route path="/product/:product/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App