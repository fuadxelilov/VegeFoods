// İmport Links
import React, {useState,useRef} from "react";
import "./blog.css"
import {Link} from "react-router-dom";
import axios from 'axios';

// Blog
export default function Blog() {
    const [text, setText] = useState("");
    const [content, setContent] = useState("");
    const [text2,setText2] = useState("");
    const [text3,setText3] = useState("");
    const [text4,setText4] = useState("");
    const [text5,setText5] = useState("");
    const [password,setPassword] = useState("")
    const imageRef = useRef()
    const sendData = () => {
        axios.post("https://fuad-final-default-rtdb.firebaseio.com/blogs.json", {text, content,text2,text3,text4,text5,image:password, id:Date.now()})
            .then(res => {
                console.log(res)
                setText('')
                setText2('')
                setText3('')
                setText4('')
                setText5('')
                setContent('')
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
                <li ><Link to="/">Slide Header</Link></li>
                <li ><Link to="/card">Card</Link></li>
                <li><Link to="/slide">Slide</Link></li>
                <li><Link to="/vegetable">Vegetable</Link></li>
                <li><Link to="/fruits">Fruits</Link></li>
                <li><Link to="/juice">Juice</Link></li>
                <li><Link to="/dried">Dried</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li className="this"><Link to="/blog">Blog</Link></li>
                <li><Link to="/mycart">Mycart</Link></li>
            </ul>
        </div>
        <div className="home">
            <div className="input-box">
                <h2>Write Blog</h2>
                <h4>Write Date</h4>
                <input value={text} placeholder="Write Date..." onChange={e => (setText(e.target.value))} />
                <h4>Write Admin</h4>
                <input value={content} placeholder="Write Admin..." onChange={e => (setContent(e.target.value))}/>
                <h4>Write Count of News</h4>
                <input value={text2} placeholder="Count of News..." onChange={e => (setText2(e.target.value))}/>
                <h4>Write Title</h4>
                <input value={text3} placeholder="Write Title..." onChange={e => (setText3(e.target.value))}/>
                <h4>Write Content</h4>
                <input value={text4} placeholder="Write Content..." onChange={e => (setText4(e.target.value))}/>
                <h4>Write Button</h4>
                <input value={text5} placeholder="Write Button..." onChange={e => (setText5(e.target.value))}/>
                <h4>Image</h4>
                <input className="fileinput" type="file" name="file" ref={imageRef} onChange={(e)=>sendImage(e)} placeholder="image....."/>
                <button disabled={text.length < 3 || content.length < 3} onClick={sendData}>Send Data</button>
            </div>
        </div>
    </>

}