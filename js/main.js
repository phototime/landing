const button = document.getElementById("send-email-button")
const input = document.getElementById("email-input")

button.addEventListener("click", () => {
  if (button.innerHTML !== "Send") return;
  const email = input.value;

  // Send email
  axios.post(
    "https://customer-feedback.zotov.dev/add",
    {
      email: email,
      source: "https://phototime.zotov.dev"
    }
  )

  // show success
  button.innerHTML = "Thank you!"
  setTimeout(() => button.innerHTML = "Send", 2000)
})
