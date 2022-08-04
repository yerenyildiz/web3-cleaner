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

    /////codewars
/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
    The string can contain any char.

    Examples input/output:

    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false

*/

function XO(str) {
    let exes = str.match(/x/gi)
    let osss = str.match(/o/gi)
    
    if (exes !== null && osss !== null){
    if (exes.length === osss.length) {return true} else {return false}; 
} if (exes === null && osss === null){return true} else {return false}}

console.log(XO("zzoo"))
