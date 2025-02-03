import { useState } from "react";
import luffy from "../images/luffy.webp"

export default function Meme() {
    const [memeTop, setMemeTop] = useState("");
    const [memeBottom, setMemeBottom] = useState("");
    const [submittedTop, setSubmittedTop] = useState("");
    const [submittedBottom, setSubmittedBottom] = useState("");

    function onSubmit(event) {
        event.preventDefault();
        setSubmittedTop(memeTop);
        setSubmittedBottom(memeBottom);
    }

    return (
        <main>
            <section>
                <form className="meForm" onSubmit={onSubmit}>
                    <div className="inpCon">
                        <label htmlFor="top">On Top Text:</label>
                        <input 
                            type="text" 
                            name="top" 
                            value={memeTop} 
                            onChange={(e) => setMemeTop(e.target.value)}
                        />
                    </div>
                    <div className="inpCon">
                        <label htmlFor="bottom">On Bottom Text:</label>
                        <input 
                            type="text" 
                            name="bottom" 
                            value={memeBottom} 
                            onChange={(e) => setMemeBottom(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>

            {/* Display submitted text only after form submission */}
            <section>
                <div className="Meme-Main">
                    <h2>{submittedTop}</h2>
                    <img src={luffy} alt="Meme Image" />
                    <h2>{submittedBottom}</h2>
                </div>
            </section>
        </main>
    )
}
