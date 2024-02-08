import React from 'react'
import memeData from '../components/memeData'
import './content.css'


function Content() {
    const [meme ,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const[allMemeImages , setAllMemeImages] = React.useState(memeData)

    function gtMemeImage() {
        const MemeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random()*MemeArray.length)
        const url = MemeArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }
    function handleChange(event) {
        const {name ,value} =event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
    }

    return(
        <main>
            <div className="form">
                <label className="form--label">Top text</label>
                <input type="text" placeholder="Top text" className="form--input"  name='topText' value={meme.topText} onChange={handleChange}/>
                <label className="form--label">Bottom text</label>
                <input type="text" placeholder="bottom text" className="form--input" name='bottomText' value={meme.bottomText} onChange={handleChange}/>
                <button className="form--button" onClick={gtMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className='meme--image'></img>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </main>
    )
}
export default Content