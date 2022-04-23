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
// SEARCH PART
document.getElementById("search").addEventListener('input',filterList);

function filterList(){
    const searchInput= document.getElementById("search");
    const filter = searchInput.value.toLowerCase();
    const boxes = document.querySelectorAll(".blogs");
    const div = document.querySelector(".found")
    const listItems = document.querySelectorAll(".categories");
    const recent = document.querySelectorAll(".recent-blog");
    const Cloud = document.querySelectorAll(".Tag-Cloud");
    const paragraph = document.querySelectorAll(".paragraph");

    boxes.forEach((item)=>{
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = "block";
            div.style.display = "none"
        }else{
            item.style.display = "none";
            div.style.display = "block"
            div.innerHTML="<h3>Nothing Found</h3>"
        }
    })
    listItems.forEach((item)=>{
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
    recent.forEach((item)=>{
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
    Cloud.forEach((item)=>{
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
    paragraph.forEach((item)=>{
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
}


const news= document.querySelector("#newsid");
const news2= document.querySelector("#newsid2");
// Blogs api
const getData = async () => {
    let newArr = []
    const response = await fetch('https://fuad-final-default-rtdb.firebaseio.com/blogs.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}

getData().then(res => {
    res.map(data=> {
        news.innerHTML += `<div class="box2">
                    <div style="background-image: url(${data.image});" class="background">
                    </div>
                    <div class="text">
                        <div class="meta">
                            <div>
                                <a href="#">${data.text}</a>
                            </div>
                            <div>
                                <a href="#">${data.content}</a>
                            </div>
                            <div>
                                <a href="#"><i class="fa-solid fa-chart-bar"></i>${data.text2}</a>
                            </div>
                        </div>
                        <div class="heading">
                            <h3><a href="#">${data.text3}</a></h3>
                            <p>${data.text4}</p>
                            <a class="btn" href="./../About/About.html">${data.text5}</a>
                        </div>
                    </div>
        </div>`
    })
    res.slice(res.length-3).map(data2=>{
        news2.innerHTML += `<div class="box2">
            <div style="background-image: url(${data2.image});" class="background">
                </div>
                            <div class="text">
                                <h3><a href="#">${data2.text3}</a></h3>
                                <div class="meta">
                                    <div>
                                <a href="#"><i class="fa-solid fa-calendar-days"></i> ${data2.text}</a>
                                    </div>
                                    <div>
                                <a href="#"><i class="fa-solid fa-user"></i>${data2.content}</a>
                                    </div>
                                    <div>
                                <a href="#"><i class="fa-solid fa-comment-dots"></i>${data2.text2}</a>
                                    </div>
                                </div>
                            </div>
        </div>`
    })
}).catch(err => {
    console.log(err)
})