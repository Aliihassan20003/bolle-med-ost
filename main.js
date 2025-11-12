let btnTop10=document.getElementById("btnTopSmør")
let btntopsmor =document.getElementById("btnTopBolle")
let btnTopOts = document.getElementById("btnTopOts")
let btnTopKaffe = document.getElementById("btnTopKaffe")
let btnscore= document.getElementById("btnscore")




// Vælg billede-elementet
const mainImage = document.getElementById('mainImage');
// Vælg alle knapper
const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    button.addEventListener('click', () => {

        console.log("trykket")
        const imageName = button.dataset.image;


        mainImage.src = `/${imageName}.jpg`;
    });
});



// 1. Vælg overskriften (hvis ID er "mainHeading")
const mainHeading = document.getElementById('mainHeading');

// 2. Vælg alle knapperne
const allButtons2 = document.querySelectorAll('button');

allButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Få teksten fra den klikkede knap (f.eks. "Top 10 (Bolle)")
        const buttonText = button.textContent;

        // Opdater H1-overskriftens indhold.
        mainHeading.textContent = buttonText;

        // Billed-logikken er fjernet herfra!
    });
});
