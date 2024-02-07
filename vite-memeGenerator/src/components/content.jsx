import React from 'react'
import memeData from '../components/memeData'
import './content.css'


function Content(params) {
    const [meme ,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const[allMemeImages , setAllMemeImages] = React.useState(memeData)

    function gtMemeImage(params) {
        const MemeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random()*MemeArray.length)
        const url = MemeArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }

    return(
        <main>
            <div className="form">
                <label className="form--label">Top text</label>
                <input type="text" placeholder="Top text" className="form--input"/>
                <label className="form--label">Bottom text</label>
                <input type="text" placeholder="and take my money" className="form--input"/>
                <button className="form--button" onClick={gtMemeImage}> Get a new meme image 🖼</button>
            </div>
            <img src={meme.randomImage} className='meme--image'></img>
        </main>
    )
}
export default Content