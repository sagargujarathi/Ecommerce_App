import '../css/Button1.css'

function Button1({ name, handleSort }) {
    return (
        <button className="button1" onClick={() => handleSort(name)}>
            {name}
        </button>
    )
}

export default Button1