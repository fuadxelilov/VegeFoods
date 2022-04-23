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
const first_block = document.querySelectorAll(".first_blocks");
const cartt = document.querySelectorAll(".cart");
const cartt2 = document.querySelectorAll(".cart2");
const containerr = document.querySelectorAll(".container2");
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


section_first.forEach(firstheade=>{
    apperOnScroll.observe(firstheade)
})
first_block.forEach(block=>{
    apperOnScroll.observe(block)
})
cartt.forEach(cartd=>{
    apperOnScroll.observe(cartd)
})
cartt2.forEach(cartd2=>{
    apperOnScroll.observe(cartd2)
})
containerr.forEach(con2=>{
    apperOnScroll.observe(con2)
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
// ALERT
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


// Disable
const input = document.getElementById('check');

input.addEventListener("change", function(){
    if(input.checked){
        document.getElementById('input1').disabled = false;
        document.getElementById('input2').disabled = false;
        document.getElementById('select-country').disabled = false;
        document.getElementById('input3').disabled = false;
        document.getElementById('input4').disabled = false;
        document.getElementById('input5').disabled = false;
        document.getElementById('input6').disabled = false;
        document.getElementById('input7').disabled = false;
        document.getElementById('input8').disabled = false;
        document.getElementById('input9').disabled = false;
        document.getElementById('input10').disabled = false;
        document.getElementById('input11').disabled = false;
        document.getElementById('input12').disabled = false;
        document.getElementById('input13').disabled = false;
        
    }else{
        document.getElementById('input1').disabled = true;
        document.getElementById('input2').disabled = true;
        document.getElementById('select-country').disabled = true;
        document.getElementById('input3').disabled = true;
        document.getElementById('input4').disabled = true;
        document.getElementById('input5').disabled = true;
        document.getElementById('input6').disabled = true;
        document.getElementById('input7').disabled = true;
        document.getElementById('input8').disabled = true;
        document.getElementById('input9').disabled = true;
        document.getElementById('input10').disabled = true;
        document.getElementById('input11').disabled = true;
        document.getElementById('input12').disabled = true;
        document.getElementById('input13').disabled = true;
    }
})
const input2 = document.getElementById('check2');
input2.addEventListener("change", function(){
    if(input2.checked){
        if(input.checked ==true){
        btn.disabled = false;
        }
    }else{
        btn.disabled = true;
    }
})


// Alert Input First Option
const btn = document.querySelector('.btn-box');
const town = document.getElementById('input5');
const postcode = document.getElementById('input6');
const email = document.getElementById('input7');

btn.addEventListener('click',(e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const townValue = town.value.trim();
	const emailValue = email.value.trim();
	const postcodeValue = postcode.value.trim();

	if(townValue === '') {
		setErrorFor(town);
	}else {
        setSuccessFor(town);
        town.value = '';
    }
	

	if(emailValue === '') {
		setErrorFor(email);
	} else if (!isEmail(emailValue)) {
		setErrorFor(email);
	}else{
        setSuccessFor(email);
        email.value = '';
    }
	
	if(postcodeValue === '') {
		setErrorFor(postcode);
	} else if (!isPostcode(postcodeValue)) {
        setErrorFor(postcode);
    }else{
        setSuccessFor(postcode);
        postcode.value = '';
    }
	
	// if(password2Value === '') {
	// 	setErrorFor(password2, 'Password2 cannot be blank');
	// } else if(passwordValue !== password2Value) {
	// 	setErrorFor(password2, 'Passwords does not match');
	// } 
}
function setErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'town error';
	formControl.className = 'postcode error';
	formControl.className = 'email error';
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'town';
    formControl.className = 'postcode';
    formControl.className = 'email';
}
function isEmail(email) {
	return /@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/.test(email);
}
function isPostcode(postcode) {
    return /^[0-9]{5}$/.test(postcode);
}

// SELECT COUNTRY
const val2 = document.getElementById("select-country");    
val2.addEventListener("change", function(){
        const val = document.querySelector('.change').value;
    if(val === "Azerbaijan") {   
        document.getElementById("input5").setAttribute('placeholder','Baku');
        document.getElementById("input8").value = "+994  ";
    }else if (val === "Turkey")  {
        document.getElementById("input5").setAttribute('placeholder','Ankara');
        document.getElementById("input8").value = "+90  ";
    }else if (val === "Pakistan")  {
        document.getElementById("input5").setAttribute('placeholder','İslamabad');
        document.getElementById("input8").value = "+92  ";
    }else if (val === "Ukraine") {
        document.getElementById("input5").setAttribute('placeholder','Kiyev');
        document.getElementById("input8").value = "+380  ";
    }else if (val === "Japan"){
        document.getElementById("input5").setAttribute('placeholder','Tokyo');
        document.getElementById("input8").value = "+81  ";
    }else if (val === "Italy"){
        document.getElementById("input5").setAttribute('placeholder','Roma');
        document.getElementById("input8").value = "+39  ";
    }
});

// Alert Input SECOND Option(Onclick)
const first_name = document.getElementById('input1');
const surname = document.getElementById('input2');
const hnumber = document.getElementById('input3');
const adres1 = document.getElementById('input4');
const phone = document.getElementById('input8');
const radio = document.getElementById('input9');
const radio2 = document.getElementById('input10');
const radio3 = document.getElementById('input11');
const radio4 = document.getElementById('input12');
const radio5 = document.getElementById('input13');



function names(){
    let rate;
    if (radio.checked){
        rate = radio.value;
    }else if (radio2.checked){
        rate = radio2.value;
    }
    let payment;
    if (radio3.checked){
        payment = radio3.value;
    }else if (radio4.checked){
        payment = radio4.value;
    }else if (radio5.checked){
        payment = radio5.value;
    }
    axios({
            method: "post",
            url: 'https://fuad-final-default-rtdb.firebaseio.com/checkoutpage.json',
            data: {
                val:val2.value,
                first_name : first_name.value,
                surname: surname.value,
                phone: phone.value,
                town : town.value,
                postcode: postcode.value,
                email: email.value,
                hnumber: hnumber.value,
                adres1: adres1.value,
                rate:rate,
                payment:payment,
            }
        })
        
    if (first_name.value === ''){
        first_name.style.borderColor = "red";
    }else{
        first_name.style.borderColor = "rgba(0,0,0,.1)";
        first_name.value = '';
    }
    if (surname.value === ''){
        surname.style.borderColor = "red";
    }else{
        surname.style.borderColor = "rgba(0,0,0,.1)";
        surname.value = '';
    }

    if(phone.value === '+994  '|| phone.value === '+90  '|| phone.value === '+92  '|| phone.value === '+380  '|| phone.value === '+81  '|| phone.value === '+39  '|| phone.value === ''){
        phone.style.borderColor = "red";
    }else if(phone.value.length < 15){
        phone.style.borderColor = "rgba(0,0,0,.1)";
        phone.value = '';
    }else{
        phone.style.borderColor = "rgba(0,0,0,.1)";
        phone.value = '';
    }

    if(hnumber.value === ''){
        hnumber.style.borderColor = "red";
    }else{
        hnumber.style.borderColor = "rgba(0,0,0,.1)";
        hnumber.value = '';
    }

    if(adres1.value === ''){
        adres1.style.borderColor = "red";
    }else{
        adres1.style.borderColor = "rgba(0,0,0,.1)";
        adres1.value = '';
    }
    
}
