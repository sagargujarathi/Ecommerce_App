
import '../../css/Navbar/Navbar.css'
import logo from '../../images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useReducer, useRef } from 'react';
import SearchResultItem from '../SearchResultItem';
import Badge from '@mui/material/Badge';
const TYPES = {
    ISICONSVISIBLE: 'isiconsvisible',
    ISNAVLINKSVISIBLE: 'isnavlinksvisible',
    ISSEARCHRESULTSVISIBLE: 'issearchresultsvisible',
    SEARCHRESULT: 'searchresult',
    ISCARTVISIBLE: 'iscartvisible',
    RESETSEARCH: 'resetsearch',
    SEARCHVALUE: 'searchvalue'
}
const stateTemplate = {
    isIconsVisible: false,
    isNavLinksVisible: true,
    isSearchResultsVisible: false,
    searchValue: '',
    searchResult: [],
    isCartVisible: false
}
function Navbar({ productData, cartData }) {
    function handleState(state, { type, payload }) {
        switch (type) {
            case TYPES.ISICONSVISIBLE:
                return { ...state, isIconsVisible: payload }
            case TYPES.ISNAVLINKSVISIBLE:
                return { ...state, isNavLinksVisible: payload }
            case TYPES.ISSEARCHRESULTSVISIBLE:
                return { ...state, isSearchResultsVisible: payload }
            case TYPES.SEARCHRESULT:
                return { ...state, searchResult: payload }
            case TYPES.ISCARTVISIBLE:
                return { ...state, isCartVisible: payload }
            case TYPES.SEARCHVALUE:
                return { ...state, searchValue: payload }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(handleState, stateTemplate)
    const addToCartRef = useRef()
    const searchBarRef = useRef()
    function handleResize() {
        dispatch({ type: TYPES.ISICONSVISIBLE, payload: !(window.innerWidth <= 1200) })
        dispatch({ type: TYPES.ISNAVLINKSVISIBLE, payload: !(window.innerWidth <= 1000) })
    }
    function handleClick(e) {
        if (e.target != searchBarRef.current) {
            dispatch({ type: TYPES.ISSEARCHRESULTSVISIBLE, payload: false })
            dispatch({ type: TYPES.SEARCHVALUE, payload: '' })
            dispatch({ type: TYPES.SEARCHRESULT, payload: [] })
        }
        if (e.target != addToCartRef.current) {
            dispatch({ type: TYPES.ISCARTVISIBLE, payload: false })
        }
    }
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])
    function handleSearchResult(data) {
        if (data == '' || data == ' ') {
            dispatch({ type: TYPES.ISSEARCHRESULTSVISIBLE, payload: false })
            dispatch({ type: TYPES.SEARCHRESULT, payload: [] })
            dispatch({ type: TYPES.SEARCHVALUE, payload: '' })
            return;
        }
        const result = productData.map(section => {
            return section.sectionItems.map(innerSection => {
                return innerSection.sectionItems.filter(item => item.itemName.toLowerCase().includes(data.toLowerCase()))
            })
        }).flat(1000)
        if (result.length > 0) {
            dispatch({ type: TYPES.SEARCHRESULT, payload: result })
            dispatch({ type: TYPES.ISSEARCHRESULTSVISIBLE, payload: true })
        }
        else {
            dispatch({ type: TYPES.ISSEARCHRESULTSVISIBLE, payload: false })
        }
        dispatch({ type: TYPES.SEARCHVALUE, payload: data })
    }
    return (
        <>
            <section>
                <div className="nav-bar">
                    <img src={logo} className='logo' />
                    {
                        state.isNavLinksVisible ?
                            <div className="navigation">
                                <ul className="links-container">
                                    <li className="link">Category</li>
                                    <li className="link">Deals</li>
                                    <li className="link">What's New</li>
                                    <li className="link">Delivery</li>
                                </ul>
                                <div className="search-bar-container" ref={searchBarRef}>
                                    <input type="text" className='search-bar' placeholder='Search Product' onChange={(e) => handleSearchResult(e.target.value)}
                                        value={state.searchValue}
                                    />
                                    <SearchIcon />
                                </div>
                                {
                                    state.isSearchResultsVisible ?
                                        <div className="search-result-container">
                                            {
                                                state.searchResult.map(product => {
                                                    return <SearchResultItem productData={product} />
                                                })
                                            }
                                        </div>
                                        : ''
                                }
                            </div>
                            : ''
                    }
                    {
                        state.isNavLinksVisible ?
                            <>
                                <div className="account-cart-container">
                                    <span><PersonIcon />{state.isIconsVisible ? 'Account' : ''}</span>
                                    <div onClick={() => dispatch({ type: TYPES.ISCARTVISIBLE, payload: !state.isCartVisible })} ref={addToCartRef}>
                                        <Badge color="primary" badgeContent={cartData.cartCount} max={99} sx={{ "& .MuiBadge-badge": { fontSize: 9, height: 15, minWidth: 15 } }} onClick={() => dispatch({ type: TYPES.ISCARTVISIBLE, payload: !state.isCartVisible })}>
                                            <AddShoppingCartIcon />
                                        </Badge>
                                        {state.isIconsVisible ? 'Cart' : ''}
                                    </div>
                                    {state.isCartVisible ? < div className="add-to-cart-result-container">
                                        {
                                            cartData.cartData.map(product => {
                                                return <SearchResultItem productData={product} />
                                            })
                                        }
                                    </div> : ''}
                                </div>
                            </>
                            :
                            <MenuIcon />
                    }
                </div>
            </section >
        </>
    )
}

export default Navbar