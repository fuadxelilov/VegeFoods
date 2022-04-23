// Counter Function
const counters= document.querySelectorAll('.counter');
counters.forEach((counter) => {
    counter.innerText = '0';
    const uptadeCounter=()=>{
        const target= counter.getAttribute('data-target');
        const c=+ counter.innerText;
        const increment= target/200;
        if(c<target){
            counter.innerText =`${Math.ceil(c + increment)}`;
            setTimeout(uptadeCounter,50);
        }
    };
    uptadeCounter();
});


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


// Slider Api
const slider = document.getElementById("wrap");

const getData = async () => {
    let newArr = []
    const response = await fetch('https://fuad-final-default-rtdb.firebaseio.com/sliderrjs.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}
getData().then(res => {
    res.map(data=> {
        var slide = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
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
}).catch(err => {
    console.log(err)
})