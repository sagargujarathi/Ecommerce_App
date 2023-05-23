import { useState } from 'react'
import { Link } from 'react-router-dom'
import StoreItem from './StoreItem'
import Button1 from './Button1'
function StoreItemPage({ data, heading, button }) {
    const [sortData, setSortData] = useState(data)
    function handleSort(name) {
        setSortData(data.filter(section => section.sectionName === name))
    }
    return (
        <div className="main-wrap-container">
            <div className="main-wrap-heading">{heading}</div>
            {
                button ?
                    <div className="main-wrap-button-container">
                        {
                            data.map(item => {
                                return (
                                    <Button1
                                        name={item.sectionName}
                                        handleSort={handleSort}
                                        style={{ backgroundColor: (sortData == item) ? 'rgb(0, 61, 41)' : '', color: (sortData == item) ? 'white' : '' }}
                                    />
                                )
                            })
                        }
                    </div>
                    : ''
            }
            <div className="grid-wrap-container">
                {
                    sortData.map(item => {
                        return item.sectionItems.map(data => {
                            return data.sectionItems.map(product => {
                                return (
                                    <>
                                        <Link
                                            to={`/product/${product.itemName}`}
                                            style={{ textDecoration: 'none' }}
                                            state={product}>

                                            <StoreItem productData={product} />
                                        </Link>
                                    </>
                                )
                            })
                        })
                    })
                }
            </div>
        </div>

    )
}

export default StoreItemPage