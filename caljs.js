let string="";
let buttons=document.querySelectorAll(".but");
a=Array.from(buttons).forEach((but)=>{
but.addEventListener('click',(e)=>{
    if(e.target.innerHTML== "="){
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML== "AC"){
        string="";
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML== "DELL"){
           string= string.replace(/.$/, '')
           document.querySelector('input').value=string;
    }
    else{

        console.log(e.target);
        string= string + e.target.innerHTML;
        document.querySelector('input').value=string;
    }
})
})