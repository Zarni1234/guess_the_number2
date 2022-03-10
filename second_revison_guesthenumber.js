'use strict';

// const number=document.querySelector('.number').textContent;

// let message=document.querySelector('.message').textContent;
let score=document.querySelector('.score').textContent;
let number=Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent=number;
score=20;

let highscore=0;

let showmessage=function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
    let guess=Number(document.querySelector('.guess').value);
    
    //When no number
   if(guess === 0){
    showmessage('No number please try agian -:');

    //When guess is equal to number
   }else if(guess === number){
    showmessage('Correct Number 👍');
    document.querySelector('.number').textContent=number;

    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('.number').style.fontSize='8rem';


    if(highscore < score){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }


   }else if(guess !== number){

        if(score > 0){
             showmessage(guess > number ? 'Too Height 👎' : 'Too Low 👎')  ;  
    
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            showmessage('loose the game') ;
            document.querySelector('.score').textContent=0;
        }
    
       
    }


});

    //When guess is too low
//    else if(guess < number){

//     if(score > 0){
//         document.querySelector('.message').textContent='Too Low 👎';  

//         score--;
//         document.querySelector('.score').textContent=score;
//     }else{
//         document.querySelector('.message').textContent='Loose the game';
//         document.querySelector('.score').textContent=0;
//     }


//     //When guess is to height
//    }else if(guess > number){

//     if(score > 0){
//         document.querySelector('.message').textContent='To Height 👎';  

//         score--;
//         document.querySelector('.score').textContent=score;
//     }else{
//         document.querySelector('.message').textContent='loose the game';
//         document.querySelector('.score').textContent=0;
//     }

//     // if(highscore < score){
//     //     highscore = score;
//     //     document.querySelector('.highscore').textContent = highscore;
//     // }

//    }

// })


    document.querySelector('.again').addEventListener('click',function(){
        number=Math.trunc(Math.random()*20)+1;

        score=20;
        document.querySelector('.score').textContent=score;
        document.querySelector('.number').textContent='?';
        document.querySelector('.message').textContent='start guessing ...';
        document.querySelector('.guess').value=' ';
        
        document.querySelector('body').style.backgroundColor='#000';
        document.querySelector('.number').style.fontSize='6rem';

    });

