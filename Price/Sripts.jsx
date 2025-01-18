export default function Scripts(prop) {
    return (
        <article>
                <div className="Img-Container">
                    <img src={prop.img} alt="Image" />
                </div>
                <div className="Info_cont">
                    <h3>{prop.name}</h3>
                    <p>Price: {prop.price}</p>
                </div>
        </article>
    )
}


