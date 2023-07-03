const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  console.log(name);

  let email = document.getElementById("email").value;
  console.log(email);

  let message = document.getElementById("message").value;
  console.log(message);

  alert("Thankyou for contacting me 😄");
});
