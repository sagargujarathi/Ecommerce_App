
function InputContainer2({ label, name, value, callBack }) {
    return (
        <label htmlFor={name} className='payment-radio'>
            <input type="radio" name={name} value={value} onChange={e => callBack.dispatch({ type: callBack.type, payload: e.target.value })} />
            {label}
        </label>
    )
}

export default InputContainer2