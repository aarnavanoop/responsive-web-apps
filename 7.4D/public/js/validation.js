document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {

            event.preventDefault();
            

            const isFormValid = validateForm();
            
            if (isFormValid) {

                console.log('Form is valid and would be submitted.');
                alert('Thank you for your message! We will get back to you soon.');
                form.reset(); 
            } else {
                console.log('Form has validation errors.');
            }
        });
    }

    function validateForm() {
        let isValid = true;
        

        isValid &= validateField('name', 'name-error', 'Name cannot be blank.');
        

        isValid &= validateEmail('email', 'email-error');


        isValid &= validatePhone('phone', 'phone-error');
        

        isValid &= validateField('message', 'message-error', 'Message cannot be blank.');

        return Boolean(isValid);
    }

    function validateField(fieldId, errorId, errorMessage) {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(errorId);
        if (field.value.trim() === '') {
            showError(field, error, errorMessage);
            return false;
        } else {
            clearError(field, error);
            return true;
        }
    }

    function validateEmail(fieldId, errorId) {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(errorId);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

        if (field.value.trim() === '') {
            showError(field, error, 'Email address cannot be blank.');
            return false;
        } else if (!emailPattern.test(field.value)) {
            showError(field, error, 'Please enter a valid email address (e.g., name@example.com).');
            return false;
        } else {
            clearError(field, error);
            return true;
        }
    }

    function validatePhone(fieldId, errorId) {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(errorId);
        const phonePattern = /^\d+$/; 
        const maxLength = 15;

        if (field.value.trim() === '') {
            showError(field, error, 'Phone number cannot be blank.');
            return false;
        } else if (!phonePattern.test(field.value)) {
            showError(field, error, 'Phone number must contain only digits.');
            return false;
        } else if (field.value.length > maxLength) {
            showError(field, error, `Phone number cannot exceed ${maxLength} digits.`);
            return false;
        } else {
            clearError(field, error);
            return true;
        }
    }

    function showError(field, errorElement, message) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        errorElement.textContent = message;
    }

    function clearError(field, errorElement) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
        errorElement.textContent = '';
    }
});