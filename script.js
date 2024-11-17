// script.js
const messages = [
    "Pagli I Love you RE! , Meri Januaa , Meri Heera 😘😘😘",
    "Missing You Pagli , Meri Sone Ki Chidiya",
    "Thank you for being in my life. 😊",
    "I love you so muchh BABE! 💖",
    "Swipe right for a surprise!"
];
let currentMessageIndex = 0;

function showMessage() {
    document.getElementById("message-section").classList.remove("hidden");
    document.getElementById("message-text").textContent = messages[currentMessageIndex];
    document.getElementById("background-music").play(); // Start playing music
}

function showNextMessage() {
    currentMessageIndex++;
    if (currentMessageIndex < messages.length) {
        document.getElementById("message-text").textContent = messages[currentMessageIndex];
    } else {
        document.getElementById("message-text").textContent = "That's all, my love! ❤️";
        document.querySelector("button").classList.add("hidden");
    }
}
