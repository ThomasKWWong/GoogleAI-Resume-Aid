import React from 'react'
import { useLocation } from 'react-router-dom'

const Result = () => {
    const location = useLocation();
    const inputs = location.state
    console.log(inputs)

    return (
        <div>
            <h1>Result</h1>
            <div>
                {
                    Object.keys(inputs.result).map((key) => {
                        return(
                            <div>
                                <h2>{key}</h2>
                                <p>{inputs.result[key]}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Result