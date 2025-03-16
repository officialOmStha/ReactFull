import './tStyle.css'


export default function Tic() {
    return (
        <>
            <h1>Tic Tac Toe</h1>
            <script src="./change.js"></script>
            <div className="tContainer">
                <div className="row">
                    <div id='1' className="box"> 1 </div>
                    <div id='2' className="box"></div>
                    <div id='3' className="box"></div>
                </div>

                <div className="row mid">
                    <div id='4' className="box"></div>
                    <div id='5' className="box"></div>
                    <div id='6' className="box"></div>
                </div>

                <div className="row">
                    <div id='7' className="box"></div>
                    <div id='8' className="box"></div>
                    <div id='9' className="box"></div>
                </div>
            </div>
        </>
    )
} 