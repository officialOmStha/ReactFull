import './Wstyle.css'
import cloud from "./cloudy.png"
import Lines from "./lines.js"
import { useState } from 'react'
import Result from "./result.jsx"

const vall = Lines.map((item) => {
    return(
        <Result
        key={item.id}
        value={item.value}
        />
    )
})

export default function Weather() {
    
    return (
        <>
            <div className="container">
                <div className="top">
                    <form action="">
                        <input type="text" placeholder="Name of place" />
                        <button>find</button>
                    </form>
                </div>
                <div className="mid">
                    <div className="img-container">
                        <img src={cloud} alt="weather" />
                    </div>
                    {vall}
                </div>
                <div className="bottom">
                </div>
            </div>
        </>
    )
}