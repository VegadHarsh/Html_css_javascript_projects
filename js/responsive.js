const hamburgerManu = document.querySelector(".navbar-hamburger-menu");
const navbar = document.querySelector(".nav_bar");
const closeBtn = document.querySelector(".fa-xmark");

hamburgerManu.addEventListener("click", ()=>{
	hamburgerManu.classList.toggle("active");
	navbar.classList.toggle("active");
})

closeBtn.addEventListener("click", ()=>{
	closeBtn.classList.toggle("active");
	navbar.classList.toggle("active");
})