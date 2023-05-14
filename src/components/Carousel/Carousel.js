import StoreItem from '../StoreItem'
import '../../css/Carousel/Carousel.css'
import { useEffect, useRef, useState } from 'react'
function Carousel(props) {
    const [progress, setProgress] = useState(0)
    const scrollContainerRef = useRef()
    let mouseDownPosition = 0, mouseDown = false, scrollLeft = 0;
    function handleResize() {
        const element = scrollContainerRef.current
        const width = element.offsetWidth
        for (let i = 1; i < 10; i++) {
            let size = (width - ((i - 1) * (16 * 1.5))) / i
            if (size < 400 && size > 250) {
                scrollContainerRef.current.style.gridTemplateColumns = `${size}px`
                scrollContainerRef.current.style.gridAutoColumns = `${size}px`
                return;
            }
        }
    }
    function handleMouseDown(e) {
        if (e.target === scrollContainerRef.current || e.target.offsetParent.parentNode == scrollContainerRef.current) {
            if (e.stopPropagation) e.stopPropagation();
            if (e.preventDefault) e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = false;
            mouseDownPosition = e.pageX - scrollContainerRef.current.offsetLeft
            mouseDown = true
            scrollLeft = scrollContainerRef.current.scrollLeft
        }
    }
    function handleMouseUp(e) {
        if (mouseDown) {
            console.log('mew')
        }
        mouseDown = false
    }
    function handleMouseMove(e) {
        e.preventDefault()
        if (!mouseDown) {
            return
        }
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const scroll = x - mouseDownPosition;
        scrollContainerRef.current.scrollLeft = scrollLeft - scroll;
    }
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    useEffect(() => {
        window.addEventListener('mousedown', handleMouseDown)
        return () => window.removeEventListener('mousedown', handleMouseDown)
    }, [])
    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp)
        return () => window.removeEventListener('mouseup', handleMouseUp)
    }, [])
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])
    useEffect(() => {
        const element = scrollContainerRef.current
        element.addEventListener('scroll', () => {
            setProgress(Math.ceil((scrollContainerRef.current.scrollLeft / scrollContainerRef.current.scrollLeftMax) * 100))
        })
        return () => element.removeEventListener('scroll', () => {
            setTimeout(() => {
                setProgress(Math.ceil((scrollContainerRef.current.scrollLeft / scrollContainerRef.current.scrollLeftMax) * 100))
            }, 1000)
        })
    }, [])
    return (
        <>
            <div className="main-wrap-container">
                <div className="main-wrap-heading" >{props.heading}</div>
                <div className="scroll-container" ref={scrollContainerRef}>
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
                <div className="scroll-progress-bar">
                    <div className="scroll-progress-load-bar" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </>
    )
}

export default Carousel