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
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import StoreItemPage from "./components/StoreItemPage"
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Heropage />
            <StoreItemPage data={JSONData} button={true} heading={'Todays deals'} />
          </>} />
        {
          JSONData.map(item => {
            return item.sectionItems.map(data => {
              return data.sectionItems.map(product => {
                return <Route path={`${product.itemName}`} element={<ItemPage productData={product} />} />
              })
            })
          })
        }
      </Routes>
    </>
  )
}

export default App