
function InputContainer2({ label, name, value }) {
    return (
        <label htmlFor={name} className='payment-radio'>
            <input type="radio" name={name} value={value} />
            {label}
        </label>
    )
}

export default InputContainer2