import '../css/Button1.css'

function Button1(props) {
    return (
        <button className="button1">
            {props.name}
        </button>
    )
}

export default Button1