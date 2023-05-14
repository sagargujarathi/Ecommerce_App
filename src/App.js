import Heropage from "./components/Heropage/Heropage"
import Navbar from "./components/Navbar/Navbar"
import StoreItem from "./components/StoreItem"
import Topcategory from "./components/TopCategory/Topcategory"
import Carousel from './components/Carousel/Carousel'
import './css/App.css'
function App() {
  return (
    <>
      <Navbar />
      <Heropage />
      <Topcategory />
      <Carousel heading='Todays Best Deals for you!' />
      <div className="main-wrap-container">
        <div className="main-wrap-heading">Todays Best Deals For You!</div>
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

    </>
  )
}

export default App