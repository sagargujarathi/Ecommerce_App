import '../../css/TopCategory/TopCategory.css'
import TopcategoryItem from './TopcategoryItem'
function Topcategory({ data, heading }) {
    return (
        <div className="main-wrap-container">
            <div className="main-wrap-heading">{heading}</div>
            <div className="top-category">
                {
                    data.map(item => {
                        return <TopcategoryItem topcategoryName={item.topCategoryName} topCategoryImage={item.topCategoryImage} />
                    })
                }
            </div>
        </div>
    )
}

export default Topcategory