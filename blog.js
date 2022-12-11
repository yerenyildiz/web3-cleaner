"use strict";

//selections
const TurkishButton = document.querySelector(".trcontent");
const EnglishButton = document.querySelector(".engcontent");
const TurkishContent = document.getElementById("turkishcontent");
const EnglishContent = document.getElementById("englishcontent");
const TurkishIsNotDefaultLang = document.getElementById("turkishcontent");

//functions
//Turkishbutton
TurkishButton.addEventListener("click", () => {
    TurkishButton.classList.add("buttontextdecoration");
    EnglishButton.classList.remove("buttontextdecoration");
    EnglishContent.classList.add("hidden");
    TurkishContent.classList.remove("hidden");
    TurkishIsNotDefaultLang.style.display ="inline-block";
})
//English Button
EnglishButton.addEventListener("click", () => {
    EnglishButton.classList.add("buttontextdecoration");
    TurkishButton.classList.remove("buttontextdecoration");
    TurkishContent.classList.add("hidden");
    EnglishContent.classList.remove("hidden");
    TurkishIsNotDefaultLang.style.display ="none";
    })
