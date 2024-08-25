import React from 'react'

const Input = ({setValue, value, label}) => {

    return (
        <div>
            <h2>{label}</h2>
            <input value={value}
            onChange={(e) => setValue(e.target.value)}></input>
        </div>
    )
}

export default Input;