document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Input declaration
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        let messages = [];

        //usename validation
        if(username.length < 3) {
            isValid = false;
            messages.push("Your username should be more than 3 characters");
        }

        //Email validation
        if(!email.includes('@') || !email.includes('.')){
            isValid = false;
            messages.push("The email you entered is invalid");
        }

        //Password validation
        if(password.length < 8) {
            isValid = false;
            messages.push("The password should be more than 8 characters");
        
        }

        feedbackDiv.style.display = "block";
        if(isValid = true){
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        }else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    })
})