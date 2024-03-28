// Top menu hamburger actions

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) => link.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Form data saving to localstorage

const form = document.getElementById("trial-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    "first-name": form.elements["first-name"].value,
    "last-name": form.elements["last-name"].value,
    "phone-number": form.elements["phone-number"].value,
    subscribtion: form.querySelector('input[name="subscribtion"]:checked')
      .value,
  };
  console.log(formData);
  if (formData) {
    alert("Form data successfully submitted!");
  }
  localStorage.setItem("formData", JSON.stringify(formData));
});
