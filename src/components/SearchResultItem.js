import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Link } from 'react-router-dom';
function SearchResultItem({ productData }) {
    return (
        <>
            <span className="search-result-item-out-container">
                <Link to={`/product/${productData.itemName}`} state={productData} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="search-result-item">
                        <div className="search-result-item-image">
                            <img src={productData.itemMainImage} />
                        </div>
                        <span className="search-result-item-name">{productData.itemName}</span>
                        <span className="search-result-item-rating">
                            {
                                productData.itemRating.map(point => {
                                    switch (point) {
                                        case 0:
                                            return <StarBorderIcon fontSize='small' />

                                        case 1:
                                            return <StarIcon fontSize='small' />
                                        default:
                                            return <StarHalfIcon fontSize='small' />
                                    }
                                })
                            }
                            <span className="search-result-review-count">({productData.itemReviewCount})</span>
                        </span>
                        <span className="search-result-item-name">{productData.itemPrice}</span>
                    </div>
                </Link>
            </span>
        </>
    )
}

export default SearchResultItem