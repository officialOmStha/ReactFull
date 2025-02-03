export default function Work(props) {
    return (
        <article>
            <h1>{props.title}</h1>
            <div className='Img-Con'>
                <img src={props.src} alt="Recipe" />
            </div>
                <p>lol</p>
        </article>
    )
}