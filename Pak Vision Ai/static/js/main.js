window.onload=function(){

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1500);

}

const text="AI Powered Player Recognition System";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();



const btn=document.getElementById("themeBtn");

btn.onclick=function(){

document.body.classList.toggle("light");

}


const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el);

});

