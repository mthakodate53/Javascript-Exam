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

// Form data verification and saving to localstorage

const form = document.getElementById("trial-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = form.elements["first-name"].value.trim();
  const lastName = form.elements["last-name"].value.trim();
  const phoneNumber = form.elements["phone-number"].value.trim();
  const subscription = document.querySelector(
    'input[name="subscription"]:checked'
  );
  if (
    !/\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/.test(
      phoneNumber
    )
  ) {
    alert("Phone number must contain only numeric characters.");
    return;
  }
  if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
    alert("First and last names must contain only alphabetic characters.");
    return;
  }
  const formData = {
    "first-name": firstName,
    "last-name": lastName,
    "phone-number": phoneNumber,
    subscription: subscription ? subscription.value : "",
  };
  alert("Form submitted successfully!");
});

//Transition for tab section images

const columnSelectors = document.querySelectorAll(
  "#tabs-left-column .tab-button"
);
const headline = document.querySelector("#tabs-text-column > h2");
const paragraph1 = document.getElementById("tabs-p1");
const paragraph2 = document.getElementById("tabs-p2");

const headlines = [
  "Meaningless text for even more meaningless purpose",
  "Cauliflower cheese taleggio fromage frais.",
  "Red leicester taleggio roquefort. ",
];
const firstParagraphTexts = [
  "Cauliflower cheese taleggio fromage frais. Pecorino the big cheese taleggio roquefort cream cheese pepper jack ricotta melted cheese. Boursin stinking bishop monterey jack fromage frais cheese and wine gouda everyone loves swiss. Lancashire macaroni cheese cream cheese.",
  "Cauliflower cheese taleggio fromage frais. Placeholder text to match the length of the first paragraph. This sentence is added to make the text the same length as the first one. More filler words go here.",
  "Red leicester taleggio roquefort. Placeholder text to match the length of the first paragraph. This sentence is added to make the text the same length as the first one. More filler words go here.",
];

const secondParagraphTexts = [
  "Cauliflower cheese taleggio fromage frais. Pecorino the big cheese taleggio roquefort cream cheese pepper jack ricotta melted cheese. Boursin stinking bishop monterey jack fromage frais cheese and wine gouda everyone loves swiss. Lancashire macaroni cheese cream cheese.",
  "Cauliflower cheese taleggio fromage frais. Placeholder text to match the length of the first paragraph. This sentence is added to make the text the same length as the first one. More filler words go here.",
  "Red leicester taleggio roquefort. Placeholder text to match the length of the first paragraph. This sentence is added to make the text the same length as the first one. More filler words go here.",
];
columnSelectors.forEach((image, index) => {
  image.addEventListener("mouseenter", () => {
    headline.textContent = headlines[index];
    paragraph1.textContent = firstParagraphTexts[index];
    paragraph2.textContent = secondParagraphTexts[index];
  });
});

const images = document.querySelectorAll(".image-card");
const backgrounds = document.querySelectorAll(".image-card img");
const overlays = document.querySelectorAll(".overlay");
images.forEach((image, index) => {
  image.addEventListener("mouseenter", () => {
    backgrounds[index].classList.add("transparent");
    overlays[index].classList.add("visible");
  });
  image.addEventListener("mouseleave", () => {
    backgrounds[index].classList.remove("transparent");
    overlays[index].classList.remove("visible");
  });
});
