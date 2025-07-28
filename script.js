const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  displayMessage(message, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = getBotReply(message);
    displayMessage(reply, "bot");
  }, 500);
}

function displayMessage(message, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);

  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.innerText = message;

  msgDiv.appendChild(bubble);
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(userMsg) {
  const msg = userMsg.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! How can I assist you today?";
  } else if (msg.includes("how are you")) {
    return "I'm just a bot, but I'm doing great! 😊";
  } else if (msg.includes("your name")) {
    return "I’m your friendly AI chatbot 🤖";
  } else if (msg.includes("bye")) {
    return "Goodbye! Have a great day! 👋";
  } else {
    return "Sorry, I didn’t understand that. Can you rephrase?";
  }
}

// Allow "Enter" key to send message
userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
