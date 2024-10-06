const form = document.getElementById('new-contact');

if(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const company = document.getElementById('company').value;
        const jobTitle = document.getElementById('job-title').value;
        const phone = document.getElementById('phone').value;
        const dateBirth = document.getElementById('date-birth').value;
        const monthBirth = document.getElementById('month-birth').value;
        const yearBirth = document.getElementById('year-birth').value;
        const birthDate = dateBirth + '-' + monthBirth + '-' + yearBirth;
    
        const newContact = {
            firstName: firstName,
            lastName: lastName,
            company: company,
            jobTitle: jobTitle,
            phone: phone,
            birthDate: birthDate
        };
    
        localStorage.setItem('newContact', JSON.stringify(newContact));
    
        alert('Contact saved, please check on your local storage');
    });
}

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