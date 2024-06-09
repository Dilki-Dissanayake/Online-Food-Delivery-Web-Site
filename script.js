function searchFood() {
    var input = document.getElementById("search-input").value.toUpperCase();
  
    var foodItems = document.querySelectorAll(".food-item");
  
    for (var i = 0; i < foodItems.length; i++) {
      var foodItem = foodItems[i];
      var foodName = foodItem.getAttribute("data-name").toUpperCase();
  
      if (foodName.indexOf(input) > -1) {
        foodItem.style.display = "";
      } else {
        foodItem.style.display = "none";
      }
    }
  }
  
  
  
  
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  
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
  
    alert("Successfully logged in");
    return false;
  }
  
  // JavaScript for slides navigation
  let slideIndex = 1;
  showSlide(slideIndex);
  
  function plusSlides(n) {
    showSlide((slideIndex += n));
  }
  
  function currentSlide(n) {
    showSlide((slideIndex = n));
  }
  
  function showSlide(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
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
  
    alert("Order placed successfully");
    return false;
  }
  