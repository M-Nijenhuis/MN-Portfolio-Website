const changeText = document.querySelector(".change-text");
const timeHtml = document.querySelector(".display-time");

const texts = ["hello", "welcome"];
const typingSpeed = 100;
const eraseSpeed = 50;
const delayBetweenTexts = 3000;

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  // current text to type
  const currentText = texts[textIndex];

  // when not deleting
  if (!isDeleting && charIndex < currentText.length) {
    changeText.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    changeText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeEffect, eraseSpeed);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenTexts);
    } else {
      isDeleting = false;
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeEffect, typingSpeed);
    }
  }
}

// Wait 1 second
setTimeout(typeEffect, 1000);

// Gets the current time for dispaying in index.html
function GetCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  timeHtml.innerHTML = `[${timeString}]`;
  console.log(timeString);
  setTimeout(GetCurrentTime, 1000);
}

GetCurrentTime();
