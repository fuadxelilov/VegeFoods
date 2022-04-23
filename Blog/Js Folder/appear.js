const section_first = document.querySelectorAll(".container");
const box1 = document.querySelectorAll(".boxes1");
const forum = document.querySelectorAll(".form");
const category = document.querySelectorAll(".categories");
const blog = document.querySelectorAll(".recent-blog");
const tag = document.querySelectorAll(".Tag-Cloud");
const text = document.querySelectorAll(".paragraph");
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
box1.forEach(boxx1=>{
    apperOnScroll.observe(boxx1)
})
forum.forEach(forumm=>{
    apperOnScroll.observe(forumm)
})
category.forEach(categroyy=>{
    apperOnScroll.observe(categroyy)
})
blog.forEach(blogg=>{
    apperOnScroll.observe(blogg)
})
tag.forEach(tagg=>{
    apperOnScroll.observe(tagg)
})
text.forEach(textt=>{
    apperOnScroll.observe(textt)
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
