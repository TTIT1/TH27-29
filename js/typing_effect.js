const messages = [
    "Anh em lưu ý không nên làm quá 180p mỗi ngày hại sức khỏe",
    "chơi đi đừng lo nghĩ nhiều học nhiêu đây thôi đủ lắm rồi"
];

let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 70; // typing speed in milliseconds
const deletingSpeed = 40; // deleting speed in milliseconds
const delayBetweenMessages = 3000; // delay before typing next message
const displayInterval = 3 * 60 * 1000; // 3 minutes in milliseconds

const typingEffectElement = document.getElementById('typing-effect-container');

function type() {
    const currentMessage = messages[messageIndex];
    if (isDeleting) {
        typingEffectElement.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingEffectElement.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentMessage.length) {
        speed = delayBetweenMessages;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        if (messageIndex === 0) { // All messages in the array have been displayed
            setTimeout(() => {
                typingEffectElement.style.display = 'none';
                setTimeout(startTypingEffect, displayInterval); // Restart after interval
            }, delayBetweenMessages); // A small delay before hiding after the last message
            return;
        }
    }

    setTimeout(type, speed);
}

function startTypingEffect() {
    typingEffectElement.style.display = 'block'; // Show the container
    charIndex = 0; // Reset for new message
    messageIndex = 0; // Start from the first message
    isDeleting = false; // Not deleting initially
    type();
}

// Initial call
startTypingEffect(); 