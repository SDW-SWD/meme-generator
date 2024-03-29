import './header.css'
import logo from '../../public/assets/troll-face.png'

function Header(params) {
    return(
        <header className="header">
            <img src={logo} className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}
export default Header