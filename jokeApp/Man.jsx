import Joke from "../jokeApp/joke"
import jokesData from "../jokeApp/jokesData"

export default function Man(){
    const jokeElement = jokesData.map((joke) => {
        return<Joke 
        key = {joke.id}
        setup = {joke.setup}
        punch ={joke.punch}
        />
    })
    
    return(
        <main>
            {jokeElement}
        </main>
    )
}