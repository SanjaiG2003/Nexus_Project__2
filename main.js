document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registration-form');
  const loginForm = document.getElementById('login-form');
  const registrationOverlay = document.getElementById('registration-overlay');
  const loginOverlay = document.getElementById('login-overlay');
  const openLoginLink = document.getElementById('open-login');
  const openRegistrationLink = document.getElementById('open-registration');

  // Event listener for registration form submission
  registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch values from the registration form
    const username = document.getElementById('new-username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('new-password').value;

    // Example: Save registration data to localStorage (replace with backend logic)
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Registration successful!'); // Example: Notify user of successful registration
    registrationForm.reset(); // Clear form inputs after submission
  });

  // Event listener for login form submission
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch values from the login form
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Example: Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Example: Simple authentication check (replace with secure backend authentication)
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
      alert('Login successful!'); // Example: Notify user of successful login
      // Redirect to another page or show logged-in content
      window.location.href = 'dashboard.html'; // Example: Redirect to dashboard
    } else {
      alert('Invalid username or password. Please try again.'); // Notify user of invalid login
      loginForm.reset(); // Clear form inputs after invalid submission
    }
  });

  // Open Login Overlay from Registration Overlay
  openLoginLink.addEventListener('click', function (event) {
    event.preventDefault();
    registrationOverlay.style.display = 'none';
    loginOverlay.style.display = 'flex';
  });

  // Open Registration Overlay from Login Overlay
  openRegistrationLink.addEventListener('click', function (event) {
    event.preventDefault();
    loginOverlay.style.display = 'none';
    registrationOverlay.style.display = 'flex';
  });

  // Menu button functionality
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtnIcon.classList.toggle("ri-menu-line");
    menuBtnIcon.classList.toggle("ri-close-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.classList.remove("ri-close-line");
    menuBtnIcon.classList.add("ri-menu-line");
  });

  // ScrollReveal initialization
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".order__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".event__content", {
    duration: 1000,
  });
});
