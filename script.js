// Add this at the beginning of your script.js
window.onload = function() {
  window.scrollTo(0, 0);
  history.scrollRestoration = "manual";
};

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector("#hamburger-menu");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add this new code to close menu when links are clicked
document.addEventListener("DOMContentLoaded", function() {
  // Get all links in the hamburger menu
  const menuLinks = document.querySelectorAll(".menu-links a");
  
  // Add click event listener to each link
  menuLinks.forEach(link => {
    link.addEventListener("click", function() {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector("#hamburger-menu");
      
      // Only close if menu is open
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        icon.classList.remove("open");
      }
    });
  });
});

const texts = [
  "MERN Stack/Web Dev",
  "OOP in Java/Python",
  "AI/ML Enthusiast"
];

let textIndex = 0;
const typingText = document.querySelector('.typing-text');

function typeText() {
  let charIndex = 0;
  const currentText = texts[textIndex];
  
  function type() {
    if (charIndex < currentText.length) {
      typingText.textContent += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeText, 500);
    }
  }

  type();
}

document.addEventListener('DOMContentLoaded', typeText);
