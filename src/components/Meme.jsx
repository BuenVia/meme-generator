import { useState } from "react";
import memeData from "../memeData"

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memeData)


    function handleClick() {
        const rand = Math.floor(Math.random() * 99)
        setMeme(prevVals => {
            return {
                ...prevVals,
                randomImage: allMemeImages.data.memes[rand].url
            }
        });
    }

    return (
        <div className="container">
            <div className="inputs">
                <input type='text' className="input" placeholder="Top line" />
                <input type='text' className="input" placeholder="Bottom line" />
            </div>
            <button onClick={handleClick} className="btn">Get a new meme image <i className="fa-solid fa-file-image"></i></button>
            <img src={meme.randomImage} alt='Meme' className="memes--image"></img>
        </div>

)}