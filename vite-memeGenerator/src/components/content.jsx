import React from 'react'
import './content.css'


function Content() {
    const [meme ,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const[allMemes , setAllMemes] = React.useState([])

    React.useEffect(() =>{
        async function get_memes() {
            const res =await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        get_memes()
    }, [])

    function gtMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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
            <div className='meme'>
                <img src={meme.randomImage} className='meme--image'></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
export default Content