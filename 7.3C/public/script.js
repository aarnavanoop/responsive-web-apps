function validateForm(event) {
    event.preventDefault();

    let isFormValid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const unit = document.getElementById('unit').value.trim();
    const phone = document.getElementById('phone').value.trim();

    const nameMsg = document.getElementById('name-msg');
    const emailMsg = document.getElementById('email-msg');
    const unitMsg = document.getElementById('unit-msg');
    const phoneMsg = document.getElementById('phone-msg');

    if (name === "") {
        nameMsg.innerHTML = "You did not enter your name";
        nameMsg.className = "message error-msg";
        isFormValid = false;
    } else {
        nameMsg.innerHTML = "Valid";
        nameMsg.className = "message valid-msg";
    }

    const emailPattern = /@deakin\.edu\.au$/;
    if (!emailPattern.test(email)) {
        emailMsg.innerHTML = "Must be your deakin email @deakin.edu.au";
        emailMsg.className = "message error-msg";
        isFormValid = false;
    } else {
        emailMsg.innerHTML = "Valid";
        emailMsg.className = "message valid-msg";
    }

    const unitPattern = /^[a-zA-Z]{3}\d{3}$/;
    if (!unitPattern.test(unit)) {
        unitMsg.innerHTML = "Unit code MUST be in format 'ABC123'";
        unitMsg.className = "message error-msg";
        isFormValid = false;
    } else {
        unitMsg.innerHTML = "Valid";
        unitMsg.className = "message valid-msg";
    }

    if (phone.length !== 10) {
        phoneMsg.innerHTML = "Phone number must be exactly 10 digits";
        phoneMsg.className = "message error-msg";
        isFormValid = false;
    } else {
        let invalidChar = '';
        for (const char of phone) {
            if (isNaN(parseInt(char))) {
                invalidChar = char;
                break;
            }
        }
        if (invalidChar) {
            phoneMsg.innerHTML = `Contains character '${invalidChar}'. Numbers only!`;
            phoneMsg.className = "message error-msg";
            isFormValid = false;
        } else {
            phoneMsg.innerHTML = "Valid";
            phoneMsg.className = "message valid-msg";
        }
    }

    return isFormValid;
}

function resetForm() {
    document.getElementById('name-msg').innerHTML = '';
    document.getElementById('email-msg').innerHTML = '';
    document.getElementById('unit-msg').innerHTML = '';
    document.getElementById('phone-msg').innerHTML = '';

    document.getElementById('name-msg').className = 'message';
    document.getElementById('email-msg').className = 'message';
    document.getElementById('unit-msg').className = 'message';
    document.getElementById('phone-msg').className = 'message';
}