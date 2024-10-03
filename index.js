const form = document.getElementById('new-contact');

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