
import '../../css/Navbar/Navbar.css'
import logo from '../../images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useReducer, useRef } from 'react';
import SearchResultItem from '../SearchResultItem';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
const TYPES = {
    ISICONSVISIBLE: 'isiconsvisible',
    ISNAVLINKSVISIBLE: 'isnavlinksvisible',
    ISSEARCHRESULTSVISIBLE: 'issearchresultsvisible',
    SEARCHRESULT: 'searchresult',
    ISCARTVISIBLE: 'iscartvisible',
    RESETSEARCH: 'resetsearch',
    SEARCHVALUE: 'searchvalue',
    HAMMENU: 'hammenu'
}
const stateTemplate = {
    isIconsVisible: false,
    isNavLinksVisible: true,
    isSearchResultsVisible: false,
    searchValue: '',
    searchResult: [],
    isCartVisible: false,
    isHamMenuVisible: false
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
            case TYPES.HAMMENU:
                return { ...state, isHamMenuVisible: payload }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(handleState, stateTemplate)
    const addToCartRef = useRef()
    const searchBarRef = useRef()
    const hamMenuRef = useRef()
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
        if (e.target != hamMenuRef.current && e.target.parentElement != hamMenuRef.current && e.target.parentElement != searchBarRef.current) {
            console.log(e.target, searchBarRef.current)
            dispatch({ type: TYPES.HAMMENU, payload: false })
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
                                            }).slice(0, 6)
                                        }
                                        {state.searchResult.length > 6 &&
                                            <Link to='/searchresults' style={{ display: 'contents' }}>
                                                <button className="show-more-button">Show More...</button>
                                            </Link>
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
                                <span onClick={() => dispatch({ type: TYPES.ISCARTVISIBLE, payload: !state.isCartVisible })} ref={addToCartRef}>
                                    <Badge color="primary" badgeContent={cartData.cartCount} max={99} sx={{ "& .MuiBadge-badge": { fontSize: 9, height: 15, minWidth: 15 } }} onClick={() => dispatch({ type: TYPES.ISCARTVISIBLE, payload: !state.isCartVisible })} style={{ pointerEvents: 'none' }}>
                                        <AddShoppingCartIcon />
                                    </Badge>
                                    {state.isIconsVisible ? 'Cart' : ''}
                                </span>
                                {state.isCartVisible ? <div className="add-to-cart-result-container">
                                    {
                                        cartData.cartData.map(product => {
                                            return <SearchResultItem productData={product} />
                                        })
                                    }
                                    {cartData.cartData.length > 6 &&
                                        <Link to='/cart' style={{ display: 'contents' }}>
                                            <button className="show-more-button">Show More...</button>
                                        </Link>
                                    }

                                </div> : ''}
                            </div>
                        </>
                        :
                        <MenuIcon onClick={() => dispatch({ type: TYPES.HAMMENU, payload: !state.isHamMenuVisible })} ref={hamMenuRef} />
                }

            </div>
            {
                state.isHamMenuVisible && !state.isNavLinksVisible ?
                    <div className="ham-menu-container">
                        {!state.isSearchResultsVisible ?
                            <><li className="link">Category</li>
                                <li className="link">Deals</li>
                                <li className="link">What's New</li>
                                <li className="link">Delivery</li>
                            </> : ''
                        }
                        <div className="search-bar-container" ref={searchBarRef}>
                            <input type="text" className='search-bar' placeholder='Search Product' onChange={(e) => handleSearchResult(e.target.value)}
                                value={state.searchValue}
                            />
                            <SearchIcon />
                        </div>
                        <div className="ham-menu-account-cart-container">
                            <button className="show-more-button"><AddShoppingCartIcon /> Cart</button>
                            <button className="show-more-button"><PersonIcon /> Account</button>
                        </div>
                        {
                            state.isSearchResultsVisible ?
                                <div className="search-result-mobile-container">
                                    {
                                        state.searchResult.map(product => {
                                            return <SearchResultItem productData={product} />
                                        })
                                    }
                                    {state.searchResult.length > 6 &&
                                        <Link to='/searchresults' style={{ display: 'contents' }}>
                                            <button className="show-more-button">Show More...</button>
                                        </Link>
                                    }
                                </div>
                                : ''
                        }
                    </div>
                    : ''
            }
        </>
    )
}

export default Navbar