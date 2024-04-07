const cont =document.querySelector(".container");
        const tex =document.querySelector(".text");
    const quest = document.querySelector(".question");
const yes = document.querySelector(".yes");
const noo = document.querySelector(".no");
const gif = document.querySelector(".gif");

yes.addEventListener("click", () => {
    quest.innerHTML="I LIKE YOU TO";
    gif.src= "I-Love-You-Hug-GIF-by-Chubbive-unscreen.gif";
    gif.style.height ="300px"; 
    gif.style.width ="300px"; 
  
    gif.style.borderradius ="12px"; 
    quest.style.fontSize= "52px";
    quest.style.fontFamily= "DM Serif Display";
   
    
});
gif.addEventListener("click", () => {
    tex.innerHTML="I LOVE YOU ";
});

// using settimeout to display text after 5 sec

setTimeout(()=>{
    tex.innerHTML="I LOVE YOU ";
},5000);

noo.addEventListener("mouseover", ()=> {
    const nooRect = noo.getBoundingClientRect();
    const maxw = window.innerWidth - nooRect.width;
    const maxh =window.innerHeight - nooRect.height;

    const x = Math.floor(Math.random()*maxw);
    const y = Math.floor(Math.random()*maxh);

    noo.style.left = x + "px";
    noo.style.top = y + "px";
})
