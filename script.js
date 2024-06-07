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

// Function to open the login form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Function to close the login form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function validateForm() {
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["psw"].value;
    if (email == "" || password == "") {
        alert("Email and Password must be filled out");
        return false;
    }
    return true;
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
