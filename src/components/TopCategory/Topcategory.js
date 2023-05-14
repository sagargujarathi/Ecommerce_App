import '../../css/TopCategory/TopCategory.css'
import TopcategoryItem from './TopcategoryItem'
function Topcategory() {
    return (
        <div className="main-wrap-container">
            <div className="main-wrap-heading">Shop Our Top Categories</div>
            <div className="top-category">
                <TopcategoryItem />
                <TopcategoryItem />
                <TopcategoryItem />
                <TopcategoryItem />
                <TopcategoryItem />
                <TopcategoryItem />
            </div>
        </div>
    )
}

export default Topcategory