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
// Remove Part
function remove(){
    document.querySelector(".text-center1").style.display="none";
}
function remove2(){
    document.querySelector(".text-center2").style.display="none";
}
function remove3(){
    document.querySelector(".text-center3").style.display="none";
}
// Appear
    const section_first = document.querySelectorAll(".container");
    const table = document.querySelectorAll(".table_part");
    const social = document.querySelectorAll(".socials");
    const akak = document.querySelectorAll(".fourth_list");
    const container = document.querySelectorAll(".container2");
    const mouse = document.querySelectorAll(".mouse");
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


social.forEach(sociall=>{
    apperOnScroll.observe(sociall)
})
section_first.forEach(firstheade=>{
    apperOnScroll.observe(firstheade)
})
table.forEach(table2=>{
    apperOnScroll.observe(table2)
})
akak.forEach(akakak=>{
    apperOnScroll.observe(akakak)
})
container.forEach(container2=>{
    apperOnScroll.observe(container2)
})
mouse.forEach(mouses=>{
    apperOnScroll.observe(mouses)
})

const list = document.getElementById("tbody_list");
// Wishlist Api
const getData = async () => {
    let newArr = []
    const response = await fetch('https://fuad-final-default-rtdb.firebaseio.com/wishlist.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}
    function quantity1(){
            const quantity1 = document.getElementById('quantity_input');
            document.getElementById('price1').innerHTML=`<span class="price_span">$</span>${quantity1.value*4.9}`
            document.getElementById('total1').innerHTML=`<span class="price_span">$</span>${quantity1.value*4.9}`
    }  
    function quantity2(){
            const quantity2 = document.getElementById('quantity_input2');
            document.getElementById('price2').innerHTML=`<span class="price_span">$</span>${quantity2.value*15.7}`
            document.getElementById('total2').innerHTML=`<span class="price_span">$</span>${quantity2.value*15.7}`
    }  
    function quantity3(){
            const quantity3 = document.getElementById('quantity_input3');
            document.getElementById('price3').innerHTML=`<span class="price_span">$</span>${quantity3.value*4.9}`
            document.getElementById('total3').innerHTML=`<span class="price_span">$</span>${quantity3.value*4.9}`
    }       
getData().then(res => {
    res.map(data=> {
        
        function remove3(){
            document.querySelector(".text-center3").style.display="none";
        }
        function quantity3(){
            const quantity3 = document.getElementById('quantity_input3');
            document.getElementById('price3').innerHTML=`<span class="price_span">$</span>${quantity3.value*1.5}`
            document.getElementById('total3').innerHTML=`<span class="price_span">$</span>${quantity3.value*1.5}`
        }
        list.innerHTML += `<tr class="text-center3">
            <td class="remove">
                <button onclick="remove3()" class="button-remove3"><i class="fa-solid fa-xmark"></i></button>
            </td>
            <td class="image">
                <div style="background-image: url(${data.image});" class="background"></div>
            </td>
            <td class="product-name">
                <h3>${data.text}</h3>
                <p>${data.content}</p>
            </td>
            <td class="price" id="price3">
                ${data.text2}
            </td>
            <td class="quantity">
                <div class="input">
                <input type="text" value="1" id="quantity_input3" oninput="quantity3()">
                </div>
            </td>
            <td class="total" id="total3">
                ${data.text2}
            </td>
        </tr>`
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

