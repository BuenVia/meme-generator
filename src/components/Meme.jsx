import memeData from "../memeData"

export default function Meme() {

    function handleClick() {
        const rand = Math.floor(Math.random() * 99)
        console.log(memeData.data.memes[rand]);
    }

    return <div className="container">
            <div className="inputs">
                <input type='text' className="input" placeholder="Top line" />
                <input type='text' className="input" placeholder="Bottom line" />
            </div>
            <button onClick={handleClick} className="btn">Get a new meme image <i className="fa-solid fa-file-image"></i></button>
    </div>
}