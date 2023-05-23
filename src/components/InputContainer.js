import React from 'react'

function InputContainer({ name, placeHolder, inputType }) {
    return (
        <div className="input-container">
            <label htmlFor="firtName">{name}</label>
            <input type={inputType} name="firtName" className='checkout-input' required placeholder={placeHolder} />
        </div>
    )
}

export default InputContainer