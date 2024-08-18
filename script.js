document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the traditional way

    let valid = true;

    // Validate First Name
    const firstName = document.getElementById('firstName');
    const firstNameError = document.getElementById('firstNameError');
    if (firstName.value.trim() === '') {
        firstNameError.textContent = 'First name is required.';
        firstNameError.style.display = 'block';
        firstName.setAttribute('aria-invalid', 'true');
        valid = false;
    } else {
        firstNameError.style.display = 'none';
        firstName.setAttribute('aria-invalid', 'false');
    }

    // Validate Last Name
    const lastName = document.getElementById('lastName');
    const lastNameError = document.getElementById('lastNameError');
    if (lastName.value.trim() === '') {
        lastNameError.textContent = 'Last name is required.';
        lastNameError.style.display = 'block';
        lastName.setAttribute('aria-invalid', 'true');
        valid = false;
    } else {
        lastNameError.style.display = 'none';
        lastName.setAttribute('aria-invalid', 'false');
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!validateEmail(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        email.setAttribute('aria-invalid', 'true');
        valid = false;
    } else {
        emailError.style.display = 'none';
        email.setAttribute('aria-invalid', 'false');
    }

    // Validate Query Type
    const queryTypeError = document.getElementById('queryTypeError');
    const generalEnquiry = document.getElementById('generalEnquiry').checked;
    const supportRequest = document.getElementById('supportRequest').checked;
    if (!generalEnquiry && !supportRequest) {
        queryTypeError.textContent = 'Please select a query type.';
        queryTypeError.style.display = 'block';
        valid = false;
    } else {
        queryTypeError.style.display = 'none';
    }

    // Validate Message
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required.';
        messageError.style.display = 'block';
        message.setAttribute('aria-invalid', 'true');
        valid = false;
    } else {
        messageError.style.display = 'none';
        message.setAttribute('aria-invalid', 'false');
    }

    // Validate Consent
    const consent = document.getElementById('consent');
    const consentError = document.getElementById('consentError');
    if (!consent.checked) {
        consentError.textContent = 'You must consent to be contacted by the team.';
        consentError.style.display = 'block';
        consent.setAttribute('aria-invalid', 'true');
        valid = false;
    } else {
        consentError.style.display = 'none';
        consent.setAttribute('aria-invalid', 'false');
    }

    if (valid) {
        // Show success toast message
        const successToast = document.getElementById('successToast');
        successToast.classList.remove('hidden');

        // Clear the form
        this.reset();

        // Hide success message after a delay
        setTimeout(() => {
            successToast.classList.add('hidden');
        }, 5000); // Message displayed for 5 seconds
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
