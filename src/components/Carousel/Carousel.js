import StoreItem from '../StoreItem'
import '../../css/Carousel/Carousel.css'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
function Carousel({ productData }) {
    const [progress, setProgress] = useState(0)
    const scrollContainerRef = useRef()
    let mouseDownPosition = 0, mouseDown = false, scrollLeft = 0;
    function handleResize() {
        const element = scrollContainerRef.current
        const width = element.offsetWidth
        for (let i = 1; i <= 30; i++) {
            let size = (width - ((i - 1) * (16 * 1.5))) / i
            if (size < 410 && size > 250) {
                scrollContainerRef.current.style.gridTemplateColumns = `${size}px`
                scrollContainerRef.current.style.gridAutoColumns = `${size}px`
                return;
            }
        }
    }
    function handleMouseDown(e) {
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
        e.cancelBubble = true;
        e.returnValue = false;
        mouseDownPosition = e.pageX - scrollContainerRef.current.offsetLeft
        mouseDown = true
        scrollLeft = scrollContainerRef.current.scrollLeft
    }
    function handleMouseUp(e) {
        mouseDown = false
    }
    function handleMouseMove(e) {
        e.preventDefault()
        if (mouseDown == false) {
            return
        }
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const scroll = x - mouseDownPosition;
        scrollContainerRef.current.scrollLeft = scrollLeft - scroll;
    }
    function handleScroll() {
        let i = Math.ceil((scrollContainerRef.current.scrollLeft / (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth)
        ) * 100)
        setProgress(i == 0 ? 10 : i)
    }
    useEffect(() => {
        const element = scrollContainerRef.current
        handleResize()
        handleScroll()
        window.addEventListener('resize', handleResize)
        element.addEventListener('mousedown', handleMouseDown)
        element.addEventListener('mouseup', handleMouseUp)
        element.addEventListener('mousemove', handleMouseMove)
        element.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('resize', handleResize)
            element.removeEventListener('mousedown', handleMouseDown)
            element.removeEventListener('mouseup', handleMouseUp)
            element.removeEventListener('mousemove', handleMouseMove)
            element.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>
            <div className="scroll-container" ref={scrollContainerRef}>
                {
                    productData.map(product => {
                        return <Link to={`/product/${product.itemName}`} style={{ textDecoration: 'none' }} state={product}>
                            <StoreItem productData={product} />
                        </Link>
                    })
                }
            </div>
            <div className="scroll-progress-bar">
                <div className="scroll-progress-load-bar" style={{ width: `${progress}%` }}></div>
            </div>
        </>
    )
}

export default Carousel