let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');

abrir.addEventListener('click',function(){
    modal.style.display = 'block';
});

cerrar.addEventListener('click',function(){
    modal.style.display = 'none';
});

abrir.addEventListener('click',function(){
    if(e.target == flex){
        modal.style.display = 'none';
    }    
});
const video=document.getElementById('video2');
const play=document.getElementById('play');
const pause=document.getElementById('pause');
play.addEventListener('click',()=>{  
    video2.play()   
});
pause.addEventListener('click',()=>{ 
    video2.pause()  
});