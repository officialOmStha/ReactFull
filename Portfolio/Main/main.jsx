import './main.css'
import Me from "../../images/me.jpg"
import Projects from "./Projects"
import Work from "./Work"

export default function Main() {
    const projectElement = Projects.map((item) => {
        return <Work
            key={item.id}
            title={item.title}
            src={item.src}
        />
    })
    return (
        <main>
            <section className='secc' id="home">
                <div className="home-left">
                    <h1>Hello!!</h1>
                    <h2>I am Om Shrestha</h2>
                    <h3>A Web Developer.</h3>
                </div>
                <div className="home-right">
                    <div className='my-img'>
                        <img src={Me} alt="My Image" />
                    </div>
                </div>
            </section>


            <section className='secc' id='work'>
                <h1> Projects That I Have Completed</h1>
                <div className="work-container">
                    {projectElement}
                </div>
            </section>

            <section className='secc' id='skill'>
                <div className="skill-container">
                    <h1>Skills</h1>
                    <div className="wrapper">
                        <div className="item item1"><h1>HTML</h1></div>
                        <div className="item item2"><h1>CSS</h1></div>
                        <div className="item item3"><h1>JS</h1></div>
                        <div className="item item4"><h1>React</h1></div>
                        <div className="item item5"><h1>Python</h1></div>
                        <div className="item item7"><h1>Java</h1></div>
                        <div className="item item6"><h1>webDev</h1></div>
                        <div className="item item8"><h1>UI/UX</h1></div>
                    </div>
                </div>
            </section>


            <section className='secc' id='service'>
                <h1>Services</h1>
                <div className="service-container">
                    <h1>Right now I am just studying.</h1>
                    <p>If you want to join me and do <br />
                     any work I am down for that.</p>
                </div>
            </section>


            <section className='secc' id='contact'>
                <h1>Contact Me With:</h1>

                <div className="contact-container">
                    <form action="#work">
                        <legend>Contact Me</legend>
                        <table>
                            <tr>
                                    <label htmlFor="name">
                                        Name:
                                        <input type="text" />
                                    </label>
                            </tr>
                            
                            <tr>
                                <label htmlFor="email">Email:
                                    <input type="email" />
                                </label>
                            </tr>
                            <tr>
                                <label htmlFor="gender">Gender:</label>
                                <input type="radio" name='gender' />male
                                <input type="radio" name='gender' />female
                            </tr>
                            <tr>
                                <label htmlFor="message">Message: </label>
                                    <textarea name="message" id="message"></textarea>
                            </tr>
                            <tr>
                                <button>Submit</button>
                            </tr>
                        </table>
                    </form>
                </div>
            </section>
        </main>
    )
}