import '../css/Button2.css'
function Button2(props) {
    return (
        <>
            <button className="button-2" style={props.style} type="submit">{props.name}</button>
        </>
    )
}

export default Button2