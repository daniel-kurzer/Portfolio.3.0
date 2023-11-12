// PRE LOADER

setTimeout(function(){
	let loaded = document.getElementById('demo-content');
	loaded.className += 'loaded';
  }, 3000);

// DARK MODE SWITCH

const themeContainer = document.getElementById('body');
const toggleSwitch = document.getElementById('checkbox');
const currentTheme = localStorage.getItem('theme') || 'light';

document.addEventListener('DOMContentLoaded', () => {
  themeContainer.classList.add(currentTheme);
  toggleSwitch.checked = currentTheme === 'dark';
});

function switchTheme() {
  if (toggleSwitch.checked) {
    themeContainer.classList.remove('light-mode');
    themeContainer.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    themeContainer.classList.remove('dark-mode');
    themeContainer.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme);

// MENU DROPDOWN

var trigbut = document.getElementById("hamburger-nav-container");
var header =  document.getElementById("header");
var menu = document.getElementById("menu");
var line = document.getElementsByClassName("ham-line");
var bodyhtml = document.body;

trigbut.addEventListener('click', function openTFmenu() {
  if (trigbut.classList.contains("active") == false && bodyhtml.classList.contains("block") == false) {
    trigbut.classList.add("active");
    menu.classList.add("active");
    header.classList.add("active");
    bodyhtml.classList.add("block");
    for (i = 0; i < line.length; i++) {
      line[i].classList.remove("deactive");
      line[i].classList.add("active");
    }
  } else {
    trigbut.classList.remove("active");
    menu.classList.remove("active");
    header.classList.remove("active");
    bodyhtml.classList.remove("block");
    for (i = 0; i < line.length; i++) {
      line[i].classList.remove("active");
      line[i].classList.add("deactive");
    }
  };
});

// LETTERING HOVER

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelectorAll("#menu-item").forEach(item => {
  item.addEventListener("mouseover", event => {
    let iteration = 0;
    const originalText = event.target.innerText;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    
    setTimeout(() => {
      clearInterval(interval);
      event.target.innerText = originalText;
    }, 500);
  });
});

// TYPING TEXT

const text = document.querySelector('.typing-text');
const words = [
  "Front-End Developer.",
  "Web Developer.",
  "Junior Developer.",
  "Software Developer."
];

const LETTER_TYPE_DELAY = 75;
const WORD_STAY_DELAY = 2000;

setTyper(text, words);

function setTyper(element, words) {

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    clearInterval(wordTypeInterval); // Clear any existing interval
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }

    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {
    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }
    
    setTimeout(startTyping, WORD_STAY_DELAY);
  }
}







