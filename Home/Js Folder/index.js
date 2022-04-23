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

const overlay = document.querySelector('.overlay');
const overlay2 = document.querySelector('.overlay2');
const cardd = document.querySelector('.store_cards');
const slider = document.getElementById("wrap");
// For SlideHeader
const getData1 = async () => {
    let newArr = []
    const response = await fetch('https://fuad-final-default-rtdb.firebaseio.com/SlideHeader.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}

// For Store Cards
const getData = async () => {
    let newArr = []
    const response = await fetch('https://fuad-final-default-rtdb.firebaseio.com/storecardds.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}

// For Second Slider
const getData2 = async () => {
    let newArr = []
    const response = await fetch('https://fuad-final-default-rtdb.firebaseio.com/sliderrjs.json')
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
function shopp(){
    count+=1;
    document.querySelector('.shop').innerHTML=count;
    console.log(count);
    document.querySelector(".shop").style.setProperty('display', 'block', 'important');
}
function toggle(){
    let toggle = document.querySelector(".heart_icon");
    toggle.classList.toggle("hheart");
}
function toggle2(){
let toggle2 = document.querySelector(".heart_icon2");
toggle2.classList.toggle("hheart");
}
function toggle10(){
let toggle10 = document.querySelector(".heart_icon10");
toggle10.classList.toggle("hheart");
}

// SlideHeader Api
getData().then(res => {
    function toggle10(){
    let toggle10 = document.querySelector(".heart_icon10");
    toggle10.classList.toggle("hheart");
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
                <a class="heart_icon10" onclick="toggle10()"><i class="fa-solid fa-heart"></i></a>
                </div>    
            </div>
        </div>`
    })
}).catch(err => {
    console.log(err)
})

// Cards Api
getData1().then(res => {
    res.map(data=> {
        overlay.innerHTML = `<div class="over-1">
            <h1 class="firsthead">${data.name}</h1>
            <h2 class="firsthead2">${data.card}</h2>
            <div class="button_box">
                <a class="button1" href="./../About/About.html">${data.button}</a>
            </div>
        </div> `
        overlay2.innerHTML = `<div class="over-2">
            <h1 class="secondhead">${data.name2}</h1>
            <h2 class="secondhead2">${data.card2}</h2>
            <div class="button_box">
                <a class="button1" href="./../About/About.html">${data.button2}</a>
            </div>
        </div> `
    })
}).catch(err => {
    console.log(err)
})

// Second Slider Api
getData2().then(res => {
    const firstheader = document.querySelectorAll(".firsthead");
    const firstheader2 =   document.querySelectorAll(".firsthead2");
    const button_first =   document.querySelectorAll(".button1");
    const secondheader =   document.querySelectorAll(".secondhead");
    const secondheader2 =   document.querySelectorAll(".secondhead2");
    const service =   document.querySelectorAll(".services");    
    const heading =   document.querySelectorAll(".headings");    
    const cardd =   document.querySelectorAll(".first_card");
    const card2 =   document.querySelectorAll(".second_card");
    const card3 =  document.querySelectorAll(".card");
    const card4 =  document.querySelectorAll(".third_card");
    const card5 =  document.querySelectorAll(".fourth_card");    
    const store =  document.querySelectorAll(".store_cards");    
    const con =  document.querySelectorAll(".container");
    const txt =  document.querySelectorAll(".Testimoty");
    const container = document.querySelectorAll(".container2");
    const mouse = document.querySelectorAll(".mouse");
    const social = document.querySelectorAll(".socials");
    const akak = document.querySelectorAll(".fourth_list");
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
    $(window).on("load",function(){
    $(".loader-wrapper").fadeOut(2000);
    });
    res.map(data=> {
        var slide = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
        el: ".slider-pagination",
        clickable: true,
        },
        autoplay: {
        delay: 1000,
        },
        });
        
        slider.innerHTML += `<div class="swiper-slide">
        <div class="box">
            <div style="background-image: url(${data.image});" class="background">
            <span><i class="fas fa-quote-left"></i></span>
            </div>
            <div class="content3">
            <p class="aboutcontent">
            ${data.text}
            </p>
            <p class="aboutperson">${data.content}</p>
            <span class="position">${data.text2}</span>
            </div>
            </div>
        </div>`
    })
    firstheader.forEach(firstheade=>{
    apperOnScroll.observe(firstheade)
    })
    firstheader2.forEach(firstheade2=>{
        apperOnScroll.observe(firstheade2)
    })
    button_first.forEach(button_1=>{
        apperOnScroll.observe(button_1)
    })
    secondheader.forEach(secondheade=>{
        apperOnScroll.observe(secondheade)
    })
    secondheader2.forEach(secondheade2=>{
        apperOnScroll.observe(secondheade2)
    })
    service.forEach(servicee=>{
        apperOnScroll.observe(servicee)
    })
    heading.forEach(headingg=>{
        apperOnScroll.observe(headingg)
    })
    cardd.forEach(carddd=>{
    apperOnScroll.observe(carddd)
    })
    card2.forEach(cardd2=>{
        apperOnScroll.observe(cardd2)
    })
    card3.forEach(cardd3=>{
        apperOnScroll.observe(cardd3)
    })
    card4.forEach(cardd4=>{
        apperOnScroll.observe(cardd4)
    })
    card5.forEach(cardd5=>{
        apperOnScroll.observe(cardd5)
    })
    store.forEach(storeed=>{
        apperOnScroll.observe(storeed)
    })
    con.forEach(conn=>{
    apperOnScroll.observe(conn)
    })
    txt.forEach(txtt=>{
    apperOnScroll.observe(txtt)
    })
    container.forEach(container2=>{
    apperOnScroll.observe(container2)
    })
    mouse.forEach(mouses=>{
    apperOnScroll.observe(mouses)
    })
    social.forEach(soc=>{
    apperOnScroll.observe(soc)
    })
    akak.forEach(cddd=>{
    apperOnScroll.observe(cddd)
    })
}).catch(err => {
    console.log(err)
})

// Alert Function
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






