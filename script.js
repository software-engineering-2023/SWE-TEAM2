const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

function redirectToHomePage() {
    window.location.href = "home.html";
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Get the sign-in form element
    var signInForm = document.querySelector('.sign-in-form');
  
    // Add event listener for form submission
    signInForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the input values
      var username = signInForm.querySelector('input[type="text"]').value;
      var password = signInForm.querySelector('input[type="password"]').value;
  
      // Check if the username and password match
      if (username === 'yousef' && password === '1234') {
        // Redirect to the client page
        window.location.href = 'client.html';
      } else {
        alert('Invalid username or password. Please try again.');
      }
    });
  });