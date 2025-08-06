let cardFront = document.getElementById('card-front');
let frontImg = document.getElementById('front-img');
let backImg = document.getElementById('back-img');
let cardBack = document.getElementById('card-back');
let flip = document.getElementById('flip');
let flipBack = document.getElementById('flip-back');
let card = document.getElementById('card');

flip.addEventListener('click',(e)=>{
    card.style.transform = "rotateY(180deg)";
    cardFront.style.width = '300px';
    cardFront.style.borderRadius = '10px';
    cardFront.style.height = '400px';
    cardBack.style.width = '300px';
    cardBack.style.borderRadius = '10px';
    cardBack.style.height = '400px';
})

flipBack.addEventListener('click',(e)=>{
    card.style.transform = "rotateY(0deg)";
    cardFront.style.width = '200px';
    cardFront.style.borderRadius = '50%';
    cardFront.style.height = '200px';
    cardBack.style.width = '200px';
    cardBack.style.borderRadius = '50%';
    cardBack.style.height = '200px';
})


