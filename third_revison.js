'use strict';

const modalbox=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btncloseModel=document.querySelector('.close-modal');
const btnopenModel= document.querySelectorAll('.show-modal');

const closeModelfunction=function(){
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
}

const openModelfunction=function(){
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
}


for(let i=0; i < btnopenModel.length; i++){

    btnopenModel[i].addEventListener('click',openModelfunction);
};


btncloseModel.addEventListener('click',closeModelfunction);

overlay.addEventListener('click',closeModelfunction);


window.addEventListener('keydown',function(a){
    // console.log(a.key);
    if(a.key === 'Escape'){
        if(!modalbox.classList.contains('hidden')){
            closeModelfunction();
        }
    }
}); 




