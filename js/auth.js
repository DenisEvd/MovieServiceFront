const constraints = {
    username: {
        presence: { allowEmpty: false, message: "is required" },
        length: { minimum: 3, message: "must be at least 3 characters" }
    },
    password: {
        presence: { allowEmpty: false, message: "is required" },
        length: { minimum: 6, message: "must be at least 6 characters" },
        format: {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            message: "must include at least one uppercase letter, one lowercase letter, one number, and one special character"
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form__form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Combine form data
        const formData = {
            username: usernameInput.value,
            password: passwordInput.value
        };

        // Validate form
        const errors = validate(formData, constraints);

        // Clear previous error
        document.querySelectorAll('.error').forEach(el => el.remove());

        if (errors) {
            // Error appearance
            Object.keys(errors).forEach((field) => {
                const fieldElement = document.getElementById(field);
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error';
                errorMessage.style.color = 'red';
                errorMessage.textContent = errors[field];
                fieldElement.parentNode.appendChild(errorMessage);
            });
        } else {
            alert('Login successful!');
        }
    });
});