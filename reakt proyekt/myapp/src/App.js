// İmport Links
import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./Page/Slide Header/home";
import Slide from "./Page/Slide/Slide";
import Card from "./Page/Card/card"
import Fruits from "./Page/Fruits/fruits";
import Juice from "./Page/Juice/juice";
import Dried from "./Page/Dried/dried";
import Wishlist from "./Page/Wishlist/wishlist"
import Blog from "./Page/Blog/blog";
import MyCart from "./Page/MyCart/mycart";
import Vegetables from "./Page/Vegetables/vegetable";

// App FUnction
function App(){
    return(
        <>
            <div className="app">
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/card" element={<Card/>}/>
                <Route path="/fruits" element={<Fruits/>}/>
                <Route path="/juice" element={<Juice/>}/>
                <Route path="/dried" element={<Dried/>}/>            
                <Route path="/slide" element={<Slide/>}/>
                <Route path="/wishlist" element={<Wishlist/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/mycart" element={<MyCart/>}/>
                <Route path="/vegetable" element={<Vegetables/>}/>
                </Routes>
            </div>
        </>
    );
}
export default App;
