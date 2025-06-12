let a=document.getElementById("b1");
a.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*100);
    a.innerHTML=`<h1>${r}</h1>`;
} )
a.addEventListener("mouseleave",function(){
    a.innerHTML=`<h1>1</h1>`;
} )
let b=document.getElementById("b2");
let clr="red"
b.addEventListener("mouseenter",function(){
    
    if(clr=="red"){
        b.style.backgroundColor="red";
        clr="green";
    }
    else if(clr=="green"){
        b.style.backgroundColor="green";
        clr="blue";
    }
    
    else{
        b.style.backgroundColor="blue";
        clr="red";
    } 
})
b.addEventListener("mouseleave",function(){
   b.style.backgroundColor="white";
})
let c=document.getElementById("b3");
c.addEventListener("mouseenter", function(){
    let c1= Math.floor(Math.random()*256)
    let c2= Math.floor(Math.random()*256)
    let c3= Math.floor(Math.random()*256)
    c.style.backgroundColor= `rgb(${c1}, ${c2}, ${c3})`;
})
c.addEventListener("mouseleave", function(){
    c.style.backgroundColor= "white";
})

let d=document.getElementById("b4")
d.addEventListener("click", function(){
    let c4=Math.floor(Math.random()*256);
    let c5=Math.floor(Math.random()*256);
    let c6=Math.floor(Math.random()*256);
    a.style.backgroundColor=`rgb(${c4},255,255)`
    b.style.backgroundColor=`rgb(255,${c5},255)`
    c.style.backgroundColor=`rgb(255,255,${c6})`
})
d.addEventListener("mouseleave", function(){
    a.style.backgroundColor="white";
    b.style.backgroundColor="white";
    c.style.backgroundColor="white";
})
