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
import { useState, createContext, useEffect } from "react"
export const themeContext = createContext()

function App() {
  const [addToCart, setAddToCart] = useState({ cartCount: 0, cartData: [] })
  function handleCart(data) {
    if (addToCart.cartData.some(item => item.itemName == data.itemName)) {
      return
    }
    localStorage.setItem('cartData', JSON.stringify({ cartCount: addToCart.cartCount + 1, cartData: [...addToCart.cartData, data] }))
    setAddToCart(p => { return { cartCount: p.cartCount + 1, cartData: [...p.cartData, data] } })
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cartData'))
    if (data != null) {
      setAddToCart(data)
    }
  }, [])
  return (
    <>
      <themeContext.Provider value={handleCart}>
        <Navbar productData={JSONData} cartData={addToCart} />
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
            <>
              <ItemPage />
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
      </themeContext.Provider>
    </>
  )
}

export default App


                    // {
                    //     "itemName": "",
                    //     "itemInfo": "",
                    //     "itemDescription": "",
                    //     "itemPrice": "",
                    //     "itemRating": [],
                    //     "itemReviewCount": 0,
                    //     "itemReviews": [
                    //         {
                    //             "reviewerName": "",
                    //             "review": "",
                    //             "reviewerRating": ""
                    //         }
                    //     ],
                    //     "itemMainImage": "",
                    //     "itemColor": [
                    //         {
                    //             "color": "",
                    //             "hex": "",
                    //             "itemLeft": 0,
                    //             "images": [
                    //                 "",
                    //                 "",
                    //                 "",
                    //                 ""
                    //             ]
                    //         }
                    //     ]
                    // }