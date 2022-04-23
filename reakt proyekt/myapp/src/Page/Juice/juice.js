// İmport Links
import React, {useState,useRef} from "react";
import './juice.css'
import {Link} from "react-router-dom";
import axios from 'axios';

// Juice
export default function Juice() {
    const [name, setName] = useState("");
    const [card, setCard] = useState("");
    const [password,setPassword] = useState("")
    const imageRef = useRef()
    const sendData = () => {
        axios.post("https://fuad-final-default-rtdb.firebaseio.com/juicess.json", {name, card,image:password, id:Date.now()})
            .then(res => {
                console.log(res)
                setName('')
                setCard('')
                imageRef.current.value = ""
            }).catch(err => console.log(err))
    }
    const sendImage = (event)=>{
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload=(event)=>{
            setPassword(event.target.result);
        }
    }
    return <>
        <div className="nav">
        <h1 class="Name">Vegefoods</h1>
            <ul>
                <li><Link to="/">Slide Header</Link></li>
                <li><Link to="/card">Card</Link></li>
                <li ><Link to="/slide">Slide</Link></li>
                <li><Link to="/vegetable">Vegetable</Link></li>
                <li><Link to="/fruits">Fruits</Link></li>
                <li className="this"><Link to="/juice">Juice</Link></li>
                <li><Link to="/dried">Dried</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/mycart">Mycart</Link></li>
            </ul>
    </div>
        <div className="home">
            <div className="input-box">
                <h2>Write Juice</h2>
                <h4>Write Title</h4>
                <input value={name} placeholder="Write Title..." onChange={e => (setName(e.target.value))} />
                <h4>Write Price</h4>
                <input value={card} placeholder="Write Price..." onChange={e => (setCard(e.target.value))}/>
                <h4>Image</h4>
                <input className="fileinput" type="file" name="file" ref={imageRef} onChange={(e)=>sendImage(e)} placeholder="image....."/>
                <button disabled={name.length < 3 || card.length < 3} onClick={sendData}>Send Data</button>
            </div>
        </div>
    </>

}