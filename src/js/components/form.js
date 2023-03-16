///
const botToken = "6236854920:AAHPFN0EYzq9KHmCzC_FOhvs7WZEboaFv6E";
const chatId = "392431624";
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  let messageText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      messageText
    )}`
  )
    .then((response) => {
      if (response.ok) {
        form.reset();
        const successMessage = document.querySelector("#confirmation");
        successMessage.innerHTML = "Form submitted successfully!";
        console.log("Message sent successfully!");
      } else {
        console.error("Failed to send message!");
      }
    })
    .catch((error) => console.error(error));
});
