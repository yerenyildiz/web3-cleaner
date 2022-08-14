//@author: Yusuf Eren Yıldız Istanbul Bar 57447, yerenyildiz@gmail.com

"use strict";

//////////////////////////////////SELECTIONS //////////////////////////////////////////////////
//navbar button selections, child classes:
const homeButton = document.querySelector(".home");
const aboutButton = document.querySelector(".about-me");
const collabButton = document.querySelector(".collab");
const blogButton = document.querySelector(".blog");
const contactButton = document.querySelector(".contact");

//page section selections:
const homePage = document.querySelector(".content")
const aboutPage = document.querySelector(".second-page")
const collabPage = document.querySelector(".third-page")
const blogPage = document.querySelector(".fourth-page")
const contactPage = document.querySelector(".fifth-page")

//Nav parent class:
const navParent = document.querySelector(".pages")
//pages parent class:
const pagesParent = document.querySelector(".pagecontainer")

//scroll style:
const scrollStyle = { behavior: "smooth", block: "end", inline: "nearest" }

//Get the button:
const mybutton = document.getElementById("myBtn");

/*modal wallet connection window */

const walletBtn = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const scrollDisable = document.body;

//////////Metamask integration

const ethereumButton = document.querySelector(".metamask-container");
const statusBar = document.querySelector(".showAccount");
const disconnectBtn = document.querySelector(".disconnectBtn");

// configuration selections
let networkDetect = ethereum.networkVersion;
let selectedAddress = ethereum.selectedAddress;
let accounts;
let account;
let isAccountConnected = false;

///////////////////////////////////////////////////////////////////////////////////////////////////////
// When the user clicks on the button, scroll to the top of the document
const topFunction = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// //navbar scroll events 
navParent.addEventListener("click", function(e){
  e.preventDefault();
  const selectString= e.target.getAttribute("id")
  const targetPage = document.querySelector(`a[href='${selectString}']`);
  targetPage.scrollIntoView(scrollStyle)})

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
  scrollFunction(); //for go to top button
};
//go to top button




//Modal Window

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  scrollDisable.style.overflow = "hidden";
  topFunction(); //an interesting bug, if i don't call this function, webpage can be locked when the user scrolled to second or another page but not first, no access to 'x' key in modal window when the 'connect wallet' button pressed.
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  scrollDisable.style.overflow = "auto";
};

walletBtn.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});



//is metamask installed?
if (typeof window.ethereum !== "undefined") {
} else {
  walletBtn.classList.remove("show-modal");
  walletBtn.classList.add("metamaskUninstalled");
  walletBtn.removeEventListener("click", openModal);
  console.log("to read web3 content, please install metamask");
  walletBtn.textContent = `Please install Metamask`
}



// metamask wallet connect button function
ethereumButton.addEventListener("click", () => {
  getAccount();
});

// getAccount function,
async function getAccount() {
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  account = accounts[0];
  isAccountConnected = true;
  localStorage.setItem("account", account); //localStorage is impressive & useful when the user refresh webpage.
  localStorage.setItem("status", isAccountConnected);
  localStorage.setItem("network", ethereum.networkVersion);
  
  if (isAccountConnected) {
    statusBar.innerHTML = "Connected with" + "  :  " + account;
    document.getElementById("status").innerText = " " + "Connected";
    document.getElementById("connectionLED").style.backgroundColor = "green";
    document.querySelector(".show-modal").innerText ="Connected" ;
    document.querySelector(".name").innerText ="YUSUF EREN YILDIZ \n Legal Engineer";
    if (ethereum.networkVersion === "4"){
    document.querySelector(".networkBtn").innerText = "Connected: Rinkeby Testnet";
        } 
    if (ethereum.networkVersion === "1"){
    document.querySelector(".networkBtn").innerText = "Connected: Ethereum Mainnet";
        } 
    if (ethereum.networkVersion !== "1" && ethereum.networkVersion !=="4"){
      document.querySelector(".networkBtn").innerText = "Connected Network: Undefined";
    }
    document.querySelector(".walletalert").style.display ="none";
  document.querySelector(".walletneededcard").style.display ="block";
  }
}

if (localStorage.length >0) { //when the user refresh webpage, still connected and should be displayed.
  if (localStorage.getItem("status")) {
    statusBar.innerHTML = "Connected with" + "  :  " + localStorage.getItem("account");
    document.getElementById("status").innerText = " " + "Connected";
    document.getElementById("connectionLED").style.backgroundColor = "green";
    document.querySelector(".show-modal").innerText ="Connected" ;
    document.querySelector(".name").innerText ="YUSUF EREN YILDIZ \n Legal Engineer";
    if (localStorage.getItem("network") === "4"){
    document.querySelector(".networkBtn").innerText = "Connected: Rinkeby Testnet";
        } 
    if (localStorage.getItem("network") === "1"){
    document.querySelector(".networkBtn").innerText = "Connected: Ethereum Mainnet";
        } 
    if (localStorage.getItem("network") !== "1" && localStorage.getItem("network") !=="4"){
      document.querySelector(".networkBtn").innerText = "Connected Network: Undefined";
    }
    document.querySelector(".walletalert").style.display ="none";
  document.querySelector(".walletneededcard").style.display ="block";
  }
}


//Metamask user disconnection detection 
window.ethereum.on("accountsChanged", function (accounts) {
  isAccountConnected = false;
  localStorage.clear();
  statusBar.innerHTML =
    "Connected with: No Wallet";
  document.getElementById("status").innerText = " " + " Not Connected";
  document.getElementById("connectionLED").style.backgroundColor = "red";
  document.querySelector(".networkBtn").innerText = "Network: Not Connected";
  document.querySelector(".show-modal").innerText ="Connect Wallet"
  document.querySelector(".name").innerText ="YUSUF EREN YILDIZ \n Attorney-At-Law";
  document.querySelector(".walletalert").style.display ="flex";
  document.querySelector(".walletneededcard").style.display ="none";
}); 

