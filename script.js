function searchFood() {
    const query = document.getElementById('search-input').value;
    alert(`Searching for: ${query}`);
}

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Function to open the login form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Function to close the login form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function validateLoginForm() {
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["psw"].value;

    if (email === "" || password === "") {
        alert("All fields must be filled out");
        return false;
    }

    // Display success alert and prevent form submission
    alert("Successfully logged in");
    return false;
}



// JavaScript for slides navigation
let slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Validate Order Form
function validateOrderForm() {
    var foodname = document.forms["orderForm"]["foodname"].value;
    var number = document.forms["orderForm"]["number"].value;
    var address = document.forms["orderForm"]["address"].value;

    if (foodname === "" || number === "" || address === "") {
        alert("All fields must be filled out");
        return false;
    }

    // Display success alert and prevent form submission
    alert("Order placed successfully");
    return false;
}