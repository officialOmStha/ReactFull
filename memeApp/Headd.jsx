import Jet from "../images/Jet.jpg";

export default function Header() {
    return (
        <header>
            <nav>
                <img src={Jet} alt="HeadImg" height={70} />
                <h1>AI Generated Header</h1>
            </nav>
        </header>
    )
}
