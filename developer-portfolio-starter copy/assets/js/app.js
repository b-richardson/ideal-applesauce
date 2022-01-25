// Hamburger Menu


const burger = document.querySelector("#burgerMenu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

 
burger.addEventListener("click", () =>{
  ul.classList.toggle("show");
});

// Close menu

const navLink = document.querySelectorAll('.navLink');

navLink.forEach((link) => {
  link.addEventListener('click',() =>{
    ul.classList.remove('show')
  })
});
