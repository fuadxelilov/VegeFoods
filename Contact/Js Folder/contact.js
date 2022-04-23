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
// Appear
const section_first = document.querySelectorAll(".container");
const block = document.querySelectorAll(".blocks");
const locate = document.querySelectorAll(".location");
const loginn = document.querySelectorAll(".login");
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

block.forEach(blockk=>{
    apperOnScroll.observe(blockk)
})
section_first.forEach(firstheade=>{
    apperOnScroll.observe(firstheade)
})
locate.forEach(locating=>{
    apperOnScroll.observe(locating)
})
loginn.forEach(loginnn=>{
    apperOnScroll.observe(loginnn)
})
mouse.forEach(mouses=>{
    apperOnScroll.observe(mouses)
})
social.forEach(sociall=>{
    apperOnScroll.observe(sociall)
})
akak.forEach(akakak=>{
    apperOnScroll.observe(akakak)
})

const firstname= document.getElementById('input1');
const email  = document.getElementById('input2');
const subject = document.getElementById('input3');
const message = document.getElementById('input4');

// Form
function fill(){
    axios({
            method: "post",
            url: 'https://fuad-final-default-rtdb.firebaseio.com/form.json',
            data: {
                firstname: firstname.value,
                email: email.value,
                subject: subject.value,
                message: message.value,
            }
        })
    if(firstname.value === ""){
        firstname.style.borderColor = "red";
    }else{
        firstname.style.borderColor= "rgba(0,0,0,.1)";
        firstname.value = '';
    }
    
    if(email.value === ""){
        email.style.borderColor = "red";
    }else if(!isEmail(email.value)){
        email.style.borderColor = "red";
    }else{
        email.style.borderColor= "rgba(0,0,0,.1)";
        email.value = '';
    }

    if(subject.value === ""){
        subject.style.borderColor = "red";
    }else{
        subject.style.borderColor= "rgba(0,0,0,.1)";
        subject.value = '';
    }


    if(message.value === ""){
        message.style.borderColor = "red";
    }else{
        message.style.borderColor= "rgba(0,0,0,.1)";
        message.value = '';
    }
}
function isEmail(email) {
	return /@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/.test(email);
}

