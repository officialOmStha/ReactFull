export default function Header(props){
    return (
        <header>
            <nav>
            <img src={props.img} alt="hakuri" className="img"/>
            <h3>My Travel Journal</h3>
            </nav>
        </header>
    )
}