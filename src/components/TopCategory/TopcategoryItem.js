import '../../css/TopCategory/TopCategoryItem.css'
import test from '../../images/test-2.png'
import test2 from '../../images/test-3.png'
function TopcategoryItem() {
    return (
        <>
            <div className="top-category-item">
                <img src={test2} />
                <p className="top-category-item-heading" >Books</p>
            </div>
        </>
    )
}

export default TopcategoryItem