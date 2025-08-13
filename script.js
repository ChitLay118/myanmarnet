document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const messageBox = document.getElementById('messageBox');
    const messageTitle = document.getElementById('messageTitle');
    const messageText = document.getElementById('messageText');
    const messageCloseBtn = document.getElementById('messageCloseBtn');

    // Password visibility toggle
    const loginEye = document.getElementById('loginEye');
    const signupEye = document.getElementById('signupEye');
    const loginPassword = document.getElementById('loginPassword');
    const signupPassword = document.getElementById('signupPassword');
    
    // Gemini API related elements
    const generatePasswordBtn = document.getElementById('generatePasswordBtn');
    const genPasswordText = document.getElementById('genPasswordText');
    const genPasswordSpinner = document.getElementById('genPasswordSpinner');

    // Custom message box function
    function showMessage(title, text) {
        messageTitle.textContent = title;
        messageText.textContent = text;
        messageBox.classList.add('show');
    }

    messageCloseBtn.addEventListener('click', () => {
        messageBox.classList.remove('show');
    });

    // Toggle password visibility for login
    loginEye.addEventListener('click', () => {
        togglePasswordVisibility(loginPassword, loginEye);
    });

    // Toggle password visibility for signup
    signupEye.addEventListener('click', () => {
        togglePasswordVisibility(signupPassword, signupEye);
    });

    function togglePasswordVisibility(passwordField, eyeIcon) {
        const isPassword = passwordField.type === 'password';
        passwordField.type = isPassword ? 'text' : 'password';
        eyeIcon.classList.toggle('fa-eye', !isPassword);
        eyeIcon.classList.toggle('fa-eye-slash', isPassword);
    }

    // Switch to Signup Form
    signupBtn.addEventListener('click', () => {
        loginBtn.classList.remove('active');
        signupBtn.classList.add('active');
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        signupForm.style.animation = 'fadeIn 0.5s ease-out';
    });

    // Switch to Login Form
    loginBtn.addEventListener('click', () => {
        signupBtn.classList.remove('active');
        loginBtn.classList.add('active');
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        loginForm.style.animation = 'fadeIn 0.5s ease-out';
    });

    // Form Submissions
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showMessage('Login Successful!', 'Redirecting to dashboard...');
        // In a real app, you would redirect here
        // window.location.href = '/dashboard';
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showMessage('Account Created!', 'Your account has been created successfully. Please verify your phone number.');
        // In a real app, you would redirect here
        // window.location.href = '/verification';
    });

    // Animate floating circles with random durations
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const duration = Math.random() * 20 + 15;
        circle.style.animationDuration = `${duration}s`;
    });
    
    // Gemini API: Generate secure password
    generatePasswordBtn.addEventListener('click', async () => {
        // Show loading spinner
        genPasswordText.style.display = 'none';
        genPasswordSpinner.style.display = 'block';

        const prompt = "Generate a strong, secure password that is at least 12 characters long and includes a mix of uppercase letters, lowercase letters, numbers, and special characters. Do not include any extra text, just the password.";
        const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
        const apiKey = "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        let retries = 0;
        const maxRetries = 5;
        const baseDelay = 1000; // 1 second

        while (retries < maxRetries) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    const result = await response.json();
                    if (result.candidates && result.candidates.length > 0 &&
                        result.candidates[0].content && result.candidates[0].content.parts &&
                        result.candidates[0].content.parts.length > 0) {
                        const password = result.candidates[0].content.parts[0].text;
                        signupPassword.value = password.trim();
                        break; // Exit the retry loop on success
                    } else {
                        console.error('Unexpected API response structure:', result);
                        throw new Error('API response malformed.');
                    }
                } else {
                    // Throw an error for non-ok responses to trigger the catch block
                    throw new Error(`API returned status code ${response.status}`);
                }
            } catch (error) {
                console.error('API call failed:', error);
                retries++;
                if (retries < maxRetries) {
                    const delay = baseDelay * Math.pow(2, retries);
                    console.log(`Retrying in ${delay / 1000}s...`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                } else {
                    // If all retries fail, show an error message
                    showMessage('Error', 'Could not generate a password. Please try again.');
                }
            } finally {
                // Hide loading spinner in all cases
                genPasswordText.style.display = 'block';
                genPasswordSpinner.style.display = 'none';
            }
        }
    });
});