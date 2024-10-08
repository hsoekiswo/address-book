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

let tableContent = document.getElementById('table-content')
let contactValue = JSON.parse(localStorage.getItem('contact'))

if (contactValue) {
    for (let i = 0; i < contactValue.length; i++) {
        let rowData = contactValue[i]
        let row = document.createElement('tr')
    
        let fullName = rowData.firstName + ' ' + rowData.lastName;
        let email = rowData.email;
        let phone = rowData.phone;
        let jobCompany = rowData.jobTitle + ' at ' + rowData.company;
    
        let cellName = document.createElement('td');
        cellName.textContent = fullName;
        row.appendChild(cellName);
        
        let cellEmail = document.createElement('td');
        cellEmail.textContent = email;
        row.appendChild(cellEmail);
    
        let cellPhone = document.createElement('td');
        cellPhone.textContent = phone;
        row.appendChild(cellPhone);
    
        let cellJob = document.createElement('td');
        cellJob.textContent = jobCompany;
        row.appendChild(cellJob);
    
        tableContent.appendChild(row);
    }
}