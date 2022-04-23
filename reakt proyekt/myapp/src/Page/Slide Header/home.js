// İmport Links
import React, {useState} from "react";
import './home.css'
import axios from 'axios';
import {Link} from "react-router-dom"

// Slide Header
export default function SlideHeader() {
    const [name, setName] = useState("");
    const [card, setCard] = useState("");
    const [button,setButton] = useState("")
    const [name2, setName2] = useState("");
    const [card2, setCard2] = useState("");
    const [button2,setButton2] = useState("");
    const sendData = () => {
        axios.post("https://fuad-final-default-rtdb.firebaseio.com/SlideHeader.json", {name, card,button,name2,card2,button2, id:Date.now()})
            .then(res => {
                console.log(res)
                setName('')
                setCard('')
                setButton('')
                setName2('')
                setCard2('')
                setButton2('')
            }).catch(err => console.log(err))
    }
    
    return <>
        <div className="nav">
        <h1 class="Name">Vegefoods</h1>
            <ul>
                <li className="this"><Link to="/">Slide Header</Link></li>
                <li><Link to="/card">Card</Link></li>
                <li><Link to="/slide">Slide</Link></li>
                <li><Link to="/vegetable">Vegetable</Link></li>
                <li><Link to="/fruits">Fruits</Link></li>
                <li><Link to="/juice">Juice</Link></li>
                <li><Link to="/dried">Dried</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/mycart">Mycart</Link></li>
            </ul>
        </div>
        <div className="home">
            <div className="input-box">
                <h2>Write Slide Header</h2>
                <h4 className="firsttitle">Write First Title</h4>
                <input value={name} placeholder="First Title..." onChange={e => (setName(e.target.value))} />
                <h4 className="secondtitle">Write Second Title</h4>
                <input value={card} placeholder="Second Title..." onChange={e => (setCard(e.target.value))}/>
                <h4 className="firstbutton">First Slide Button</h4>
                <input value={button} placeholder="First Slide Button..." onChange={e => (setButton(e.target.value))}/>
                <h4 className="thirdtitle">Write Third Title</h4>
                <input value={name2} placeholder="Third Title..." onChange={e => (setName2(e.target.value))} />
                <h4 className="fourhtitle">Write Fourth Title</h4>
                <input value={card2} placeholder="Fourth Title..." onChange={e => (setCard2(e.target.value))}/>
                <div className="br">
                <h4 className="secondbutton">Second Slide Button</h4>
                <input className="inputt" value={button2} placeholder="Second Slide Button..." onChange={e => (setButton2(e.target.value))}/>
                <button disabled={name.length < 3 || card.length < 3} onClick={sendData}>Send Data</button>
                </div>
            </div>
        </div>
    </>

}