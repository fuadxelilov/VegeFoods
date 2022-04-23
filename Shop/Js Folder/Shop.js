// Toggle Menu
let burger = document.querySelector('.menubar')
let menu = document.getElementById("lists")


burger.addEventListener('click', toggleMenu)
function toggleMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
        burger.classList.remove('Active')
    } else {
        menu.classList.add('active')
        burger.classList.add('Active')
    }
}
// Scroll Function For Navbar
window.onscroll = function() {
    if (scrollY > 30) {
        document.getElementById("nav_bar").style.display="none"; 
        }else{
            document.getElementById("nav_bar").style.display=""; 
        }
        if(scrollY > 430 ){
            document.getElementById("nav_bar").style.display="block";
            document.getElementById("nav_bar").style.setProperty('position', 'fixed', 'important');
            document.querySelector(".Name").style.color="#000"
            document.getElementById("nav_bar").style.display="flex";
            document.getElementById("nav_bar").style.top="0";
            document.getElementById("nav_bar").style.height="55px";
            document.querySelector("#lists").style.position="fixed";
            document.querySelector("#lists").style.left="57%";
            document.getElementById("lists").style.padding="15.5px 0 0 0";
            document.getElementById("nav_bar").style.padding="2px 0 0 0";
            document.querySelector(".inside").style.top="25px";
            document.querySelector(".shop").style.bottom="9px";
            document.querySelector(".menu").style.margin="0 15px 0 0";
            document.querySelector(".menu").style.padding="5px 11px 10px 11px";
            document.querySelector(".Name").style.padding="5px 5px 10px 5px";
        }else if (scrollY >= 0) {
            document.getElementById("lists").style.position="static";
            document.getElementById("nav_bar").style.position="static";
            document.querySelector(".Name").style.color="#82ae46";
            document.getElementById("nav_bar").style.height="73px";
            document.getElementById("nav_bar").style.padding="1% 0 0 0";
            document.getElementById("lists").style.padding="1% 0";
            document.querySelector(".inside").style.top="35px";
            document.querySelector(".shop").style.bottom="20px";
            document.getElementById("menuid").style.height="14%"
        }
}
const cardd = document.querySelector('.store_cards1');
const cardd2 = document.querySelector('.store_cards2');
const cardd3 = document.querySelector('.store_cards3');
const cardd4 = document.querySelector('.store_cards4');
// Vegetable Api
const getData = async () => {
    let newArr = []
    const response = await fetch('https://fuad-final-default-rtdb.firebaseio.com/vegetable.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}
// Fruit Api
const getData2 = async () => {
    let newArr = []
    const response = await fetch('https://fuad-final-default-rtdb.firebaseio.com/fruit.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}
// Juice Api
const getData3 = async () => {
    let newArr = []
    const response = await fetch('https://fuad-final-default-rtdb.firebaseio.com/juicess.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}
// Dried Api
const getData4 = async () => {
    let newArr = []
    const response = await fetch('https://fuad-final-default-rtdb.firebaseio.com/drieds.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}
// Card Shopping
var shop = document.querySelector('.shopping');
var spn = document.querySelector('.shop');
let count = 0;
// Add Cart +1
function shopp(){
    count+=1;
    document.querySelector('.shop').innerHTML=count;
    console.log(count);
    document.querySelector(".shop").style.setProperty('display', 'block', 'important');
}
// Heart Icon
function toggle(){
    let toggle = document.querySelector(".heart_icon");
    toggle.classList.toggle("hheart");
}
function toggle2(){
let toggle2 = document.querySelector(".heart_icon2");
toggle2.classList.toggle("hheart");
}
function toggle4(){
let toggle4 = document.querySelector(".heart_icon4");
toggle4.classList.toggle("hheart");
}
function toggle5(){
let toggle5 = document.querySelector(".heart_icon5");
toggle5.classList.toggle("hheart");
}
function toggle6(){
let toggle6 = document.querySelector(".heart_icon6");
toggle6.classList.toggle("hheart");
}
function toggle7(){
let toggle7 = document.querySelector(".heart_icon7");
toggle7.classList.toggle("hheart");
}
function toggle8(){
let toggle8= document.querySelector(".heart_icon8");
toggle8.classList.toggle("hheart");
}
function toggle9(){
let toggle9= document.querySelector(".heart_icon9");
toggle9.classList.toggle("hheart");
}
function toggle3(){
let toggle3 = document.querySelector(".heart_icon3");
toggle3.classList.toggle("hheart");
}
function toggle10(){
let toggle10 = document.querySelector(".heart_icon10");
toggle10.classList.toggle("hheart");
}
function toggle11(){
let toggle11 = document.querySelector(".heart_icon11");
toggle11.classList.toggle("hheart");
}
function toggle12(){
let toggle12 = document.querySelector(".heart_icon12");
toggle12.classList.toggle("hheart");
}

getData().then(res => {
    const section_first = document.querySelectorAll(".container");
const head = document.querySelectorAll(".headings");
const container = document.querySelectorAll(".container2");
const mouse = document.querySelectorAll(".mouse");
const cards = document.querySelectorAll(".store_cards1");
// ======
const cards2 = document.querySelectorAll(".store_cards2");
const cards3 = document.querySelectorAll(".store_cards3");
const cards4 = document.querySelectorAll(".store_cards4");
const akak = document.querySelectorAll(".fourth_list");
const social = document.querySelectorAll(".socials");
const Appearoptions = {
    threshold:0
};
const apperOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }else {
            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target)
        }
    })
},Appearoptions);


section_first.forEach(firstheade=>{
    apperOnScroll.observe(firstheade)
})
head.forEach(heade=>{
    apperOnScroll.observe(heade)
})
container.forEach(con=>{
    apperOnScroll.observe(con)
})
mouse.forEach(con=>{
    apperOnScroll.observe(con)
})
cards.forEach(cardd=>{
    apperOnScroll.observe(cardd)
})
cards2.forEach(cardd2=>{
    apperOnScroll.observe(cardd2)
})
cards3.forEach(cardd3=>{
    apperOnScroll.observe(cardd3)
})
cards4.forEach(cardd4=>{
    apperOnScroll.observe(cardd4)
})
akak.forEach(akakak=>{
    apperOnScroll.observe(akakak)
})
social.forEach(sociall=>{
    apperOnScroll.observe(sociall)
})
function toggle3(){
let toggle3 = document.querySelector(".heart_icon3");
toggle3.classList.toggle("hheart");
}
    res.map(data=> {
        cardd.innerHTML += `<div class="cardd2">
            <div style="background-image: url(${data.image});" class="products">
            <a href="#">
            </a>
            </div>
            <div class="content">
            <h3>
                <a href="#">${data.name}</a>              
            </h3>
            <div class="cost">
                <span class="first_price">${data.card}</span>
                <div class="icons">
                <a href="#"><i class="fa-solid fa-bars"></i></a>
                <a class="shopping" onclick="shopp()"><i class="fa-solid fa-cart-shopping"></i></a>
                <a onclick="toggle3()" class="heart_icon3"><i class="fa-solid fa-heart"></i></a>
                </div>    
            </div>
        </div>`
    })
}).catch(err => {
    console.log(err)
})
getData2().then(res => {
    function toggle10(){
    let toggle10 = document.querySelector(".heart_icon10");
    toggle10.classList.toggle("hheart");
    }
    res.map(data=> {
        cardd2.innerHTML += `<div class="cardd2">
            <div style="background-image: url(${data.image});" class="products">
            <a href="#">
            </a>
            </div>
            <div class="content">
            <h3>
                <a href="#">${data.name}</a>              
            </h3>
            <div class="cost">
                <span class="first_price">${data.card}</span>
                <div class="icons">
                <a href="#"><i class="fa-solid fa-bars"></i></a>
                <a class="shopping" onclick="shopp()"><i class="fa-solid fa-cart-shopping"></i></a>
                <a class="heart_icon10" onclick="toggle10()"><i class="fa-solid fa-heart"></i></a>
                </div>    
            </div>
        </div>`
    })
}).catch(err => {
    console.log(err)
})
getData3().then(res => {
    function toggle11(){
    let toggle11 = document.querySelector(".heart_icon11");
    toggle11.classList.toggle("hheart");
    }
    res.map(data=> {
        cardd3.innerHTML += `<div class="cardd2">
            <div style="background-image: url(${data.image});" class="products">
            <a href="#">
            </a>
            </div>
            <div class="content">
            <h3>
                <a href="#">${data.name}</a>              
            </h3>
            <div class="cost">
                <span class="first_price">${data.card}</span>
                <div class="icons">
                <a href="#"><i class="fa-solid fa-bars"></i></a>
                <a class="shopping" onclick="shopp()"><i class="fa-solid fa-cart-shopping"></i></a>
                <a class="heart_icon11" onclick="toggle11()"><i class="fa-solid fa-heart"></i></a>
                </div>    
            </div>
        </div>`
    })
}).catch(err => {
    console.log(err)
})
getData4().then(res => {
    function toggle12(){
    let toggle12 = document.querySelector(".heart_icon12");
    toggle12.classList.toggle("hheart");
    }
    res.map(data=> {
        cardd4.innerHTML += `<div class="cardd2">
            <div style="background-image: url(${data.image});" class="products">
            <a href="#">
            </a>
            </div>
            <div class="content">
            <h3>
                <a href="#">${data.name}</a>              
            </h3>
            <div class="cost">
                <span class="first_price">${data.card}</span>
                <div class="icons">
                <a href="#"><i class="fa-solid fa-bars"></i></a>
                <a class="shopping" onclick="shopp()"><i class="fa-solid fa-cart-shopping"></i></a>
                <a class="heart_icon12" onclick="toggle12()"><i class="fa-solid fa-heart"></i></a>
                </div>    
            </div>
        </div>`
    })
}).catch(err => {
    console.log(err)
})
// Tab Part
const link1 = document.querySelector(".all_link");
const link2 = document.querySelector(".vegetable");
const link3 = document.querySelector(".fruits");
const link4 = document.querySelector(".juice");
const link5 = document.querySelector(".dried");
const llink1 = document.querySelector(".link1");
const llink2 = document.querySelector(".link2");
const llink3 = document.querySelector(".link3");
const llink4 = document.querySelector(".link4");
const llink5 = document.querySelector(".link5");
function click1(){
    llink1.style.background = "#82ae46";
    llink1.style.color = "#fff";
    // LLink1
    llink2.style.background = "#fff";
    llink2.style.color = "#000";
    llink3.style.background = "#fff";
    llink3.style.color = "#000";
    llink4.style.background = "#fff";
    llink4.style.color = "#000";
    llink5.style.background = "#fff";
    llink5.style.color = "#000";
    link1.style.background = "#82ae46";
    link1.style.color = "#fff";
    link2.style.background = "#fff";
    link2.style.color = "#82ae46";
    link3.style.background = "#fff";
    link3.style.color = "#82ae46";
    link4.style.background = "#fff";
    link4.style.color = "#82ae46";
    link5.style.background = "#fff";
    link5.style.color = "#82ae46";
}
function clickk(){
    llink2.style.background = "#82ae46";
    llink2.style.color = "#fff";
    // LLink2
    llink1.style.background = "#fff";
    llink1.style.color = "#000";
    llink3.style.background = "#fff";
    llink3.style.color = "#000";
    llink4.style.background = "#fff";
    llink4.style.color = "#000";
    llink5.style.background = "#fff";
    llink5.style.color = "#000";
    link2.style.background = "#82ae46";
    link2.style.color = "#fff";
    link1.style.background = "#fff";
    link1.style.color = "#82ae46";
    link3.style.background = "#fff";
    link3.style.color = "#82ae46";
    link4.style.background = "#fff";
    link4.style.color = "#82ae46";
    link5.style.background = "#fff";
    link5.style.color = "#82ae46";
}
function click2(){
    llink3.style.background = "#82ae46";
    llink3.style.color = "#fff";
    // llink3
    llink1.style.background = "#fff";
    llink1.style.color = "#000";
    llink2.style.background = "#fff";
    llink2.style.color = "#000";
    llink4.style.background = "#fff";
    llink4.style.color = "#000";
    llink5.style.background = "#fff";
    llink5.style.color = "#000";
    link3.style.background = "#82ae46";
    link3.style.color = "#fff";
    link1.style.background = "#fff";
    link1.style.color = "#82ae46";
    link2.style.background = "#fff";
    link2.style.color = "#82ae46";
    link4.style.background = "#fff";
    link4.style.color = "#82ae46";
    link5.style.background = "#fff";
    link5.style.color = "#82ae46";
}
function click3(){
    llink4.style.background = "#82ae46";
    llink4.style.color = "#fff";
    // llink4
    llink1.style.background = "#fff";
    llink1.style.color = "#000";
    llink2.style.background = "#fff";
    llink2.style.color = "#000";
    llink3.style.background = "#fff";
    llink3.style.color = "#000";
    llink5.style.background = "#fff";
    llink5.style.color = "#000";
    link4.style.background = "#82ae46";
    link4.style.color = "#fff";
    link1.style.background = "#fff";
    link1.style.color = "#82ae46";
    link2.style.background = "#fff";
    link2.style.color = "#82ae46";
    link3.style.background = "#fff";
    link3.style.color = "#82ae46";
    link5.style.background = "#fff";
    link5.style.color = "#82ae46";
}
function click4(){
    llink5.style.background = "#82ae46";
    llink5.style.color = "#fff";
    link5.style.background = "#82ae46";
    link5.style.color = "#fff";
    // llink5
    llink1.style.background = "#fff";
    llink1.style.color = "#000";
    llink3.style.background = "#fff";
    llink3.style.color = "#000";
    llink2.style.background = "#fff";
    llink2.style.color = "#000";
    llink4.style.background = "#fff";
    llink4.style.color = "#000";
    link1.style.background = "#fff";
    link1.style.color = "#82ae46";
    link2.style.background = "#fff";
    link2.style.color = "#82ae46";
    link4.style.background = "#fff";
    link4.style.color = "#82ae46";
    link3.style.background = "#fff";
    link3.style.color = "#82ae46";
}
const disable= document.querySelector(".dis");
const disable2= document.querySelector(".dis2");
// Disable
function disablee(){
    disable.style.background = "#EEEEEE";
    disable.style.color = "#ABABAB";
    disable2.style.background = "#fff";
    disable2.style.color = "#000";
}
function disablee2(){
    disable2.style.background = "#EEEEEE";
    disable2.style.color = "#ABABAB";
    disable.style.background = "#fff";
    disable.style.color = "#000";
}
// Alert Part
let address = document.getElementById('address');
let submitt = document.getElementById('xxx');
submitt.addEventListener('click', function(){
    axios({
            method: "post",
            url: 'https://fuad-final-default-rtdb.firebaseio.com/adress_parts.json',
            data: {
                address: address.value,
            }
        })
                
                if (address.value === '' || address.value == null) {
                    document.querySelector('.msg').innerHTML="Warning: Write adress again!";
                    document.querySelector('.alert').style.background="#ffdb9b";
                    document.querySelector('.alert').style.borderLeft="8px solid #ffa502";
                    document.getElementById('span1').style.display="block";
                    document.getElementById('span2').style.display="none";
                    document.getElementById('span4').style.display="none";
                    document.querySelector('.msg').style.color="#ce8500";
                    document.getElementById('clsbtn').style.background="#ffc766";
                    document.getElementById('span3').style.color="#ce8500";
                    console.log('Email required');
                }else if(!isEmail(address.value)){
                    document.querySelector('.msg').innerHTML="Wrong: Write a valid email address";
                    document.querySelector('.alert').style.background="#9f0909";
                    document.querySelector('.alert').style.borderLeft="8px solid rgb(208 17 0)";
                    document.getElementById('span1').style.display="none";
                    document.getElementById('span2').style.display="none";
                    document.getElementById('span4').style.display="block";
                    document.querySelector('.msg').style.color="rgb(255 52 42)";
                    document.getElementById('clsbtn').style.background="rgb(198 5 5 / 91%)";
                    document.getElementById('span3').style.color="#ce8500";
                    console.log('Email required');
                }else if (address.value.length > 0) {
                    document.querySelector('.msg').innerHTML="Success: Your address has been added";
                    document.querySelector('.msg').style.color="#1FA85F";
                    document.querySelector('.alert').style.background="rgb(157 220 60)";
                    document.querySelector('.alert').style.borderLeft="8px solid green";
                    document.getElementById('span2').style.display="block";
                    document.getElementById('span1').style.display="none";
                    document.getElementById('span4').style.display="none";
                    document.getElementById('clsbtn').style.background="green";
                    document.getElementById('span3').style.color="rgb(157 220 60)";
                    console.log('message sent');
                }
        address.value = ''
        function isEmail(email) {
	return /@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/.test(email);
    }
});









