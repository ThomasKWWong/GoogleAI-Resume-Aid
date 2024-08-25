import React from 'react'

const Input = ({setObjective, value}) => {

    return (
        <div>
            <h2>{value}</h2>
            <input onChange={(e) => setObjective(e.target.value)}></input>
        </div>
    )
}

export default Input;