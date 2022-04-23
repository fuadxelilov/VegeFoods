// Appear PArt
const section_first = document.querySelectorAll(".container");
const background = document.querySelectorAll(".iframe");
const text = document.querySelectorAll(".content");
const containerr = document.querySelectorAll(".container2");
const wrap = document.querySelectorAll(".wrapper");
const head = document.querySelectorAll(".Testimoty");
const service = document.querySelectorAll(".services");
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
background.forEach(backgroundd=>{
    apperOnScroll.observe(backgroundd)
})
text.forEach(textt=>{
    apperOnScroll.observe(textt)
})
containerr.forEach(container22=>{
    apperOnScroll.observe(container22)
})
wrap.forEach(wrapp=>{
    apperOnScroll.observe(wrapp)
})
head.forEach(headd=>{
    apperOnScroll.observe(headd)
})
service.forEach(servicee=>{
    apperOnScroll.observe(servicee)
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