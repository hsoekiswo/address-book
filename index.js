const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("nav-bar");
const closeNav = document.getElementById("close-nav");
const contact = document.getElementById("contact");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hidden");
    navBar.classList.remove("hidden");
    closeNav.classList.remove("hidden");
    contact.classList.remove("main-absolute");
});

closeNav.addEventListener("click", () => {
    hamburger.classList.toggle("hidden");
    navBar.classList.add("hidden");
    closeNav.classList.add("hidden");
    contact.classList.add("main-absolute");
})

let contactValue = JSON.parse(localStorage.getItem('contact'))
const fullName = contactValue.firstName + ' ' + contactValue.lastName
const email = contactValue.email
const phone = contactValue.phone
const jobCompany = contactValue.jobTitle + ' at ' + contactValue.company

document.getElementsByClassName('cell-name')[0].innerHTML = fullName;
document.getElementsByClassName('cell-email')[0].innerHTML = email;
document.getElementsByClassName('cell-phone')[0].innerHTML = phone;
document.getElementsByClassName('cell-job')[0].innerHTML = jobCompany;