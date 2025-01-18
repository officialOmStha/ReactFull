

export default function Head(prop) {
    return (
        <header>
            <nav>
                <img src={prop.img} alt="luffy" className="img"></img>
                <span>FunFact</span>
            </nav>
        </header>
    )
}