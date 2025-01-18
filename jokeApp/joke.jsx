import { useState } from "react"

export default function Joke(prop){
    const [isShown,setIsShown] = useState(false)

    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    
    return(
        <article>
        {prop.setup ? <h3>{prop.setup} </h3> : null}
        {isShown ? <p>{prop.punch}</p> : null}
        <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button> 
        </article>
    )
}