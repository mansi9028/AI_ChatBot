const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const typingIndicator = document.getElementById("typingIndicator");

// Welcome message
window.onload = () => {
  displayMessage("Hello! 👋 I'm your AI assistant. Ask me anything!", "bot");
  loadChatHistory();
};

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  displayMessage(message, "user");
  saveMessage(message, "user");
  userInput.value = "";

  typingIndicator.style.display = "block";

  setTimeout(() => {
    const reply = getBotReply(message);
    typingIndicator.style.display = "none";
    displayMessage(reply, "bot");
    saveMessage(reply, "bot");
  }, 1000);
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

function getBotReply(msg) {
  const text = msg.toLowerCase();

  if (text.includes("hi") || text.includes("hello")) return "Hi there! 😊";
  if (text.includes("how are you")) return "I'm just code, but I'm feeling helpful! 🤖";
  if (text.includes("your name")) return "I’m ChatBuddy!";
  if (text.includes("bye")) return "Goodbye! See you soon 👋";
  if (text.includes("love")) return "I ❤️ friendly users like you!";
  return "Hmm... I didn't get that. 🤔 Try something else!";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function clearChat() {
  chatBox.innerHTML = "";
  localStorage.removeItem("chatHistory");
}

// 💾 Save & Load Chat History
function saveMessage(msg, sender) {
  const history = JSON.parse(localStorage.getItem("chatHistory")) || [];
  history.push({ msg, sender });
  localStorage.setItem("chatHistory", JSON.stringify(history));
}

function loadChatHistory() {
  const history = JSON.parse(localStorage.getItem("chatHistory")) || [];
  history.forEach(entry => displayMessage(entry.msg, entry.sender));
}

// Allow Enter key
userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});
