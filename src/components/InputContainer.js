import React from 'react'

function InputContainer({ name, placeHolder, inputType, callBack }) {
    return (
        <div className="input-container">
            <label htmlFor={name}>{name}</label>
            <input
                type={inputType}
                name={name}
                className='checkout-input'
                required
                placeholder={placeHolder}
                onChange={(e) => callBack.dispatch({ type: callBack.type, payload: e.target.value })}
            />
        </div>
    )
}

export default InputContainer