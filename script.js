let colors = ['#73186e', '#10a2f5', '#ff2026', '#e9bc3f'];

(function() {
  setModeEventListener();
  setRandomLinkColor();
  setColorHoverListener();
  setBioEventListener();
  setRandomPhoto();

  setInterval(() => {
    setRandomPhoto();
  }, 2500);

  setInterval(() => {
    setRandomLinkColor();
  }, 5000);
})();

/* Dark Mode */
function setModeEventListener() {
  let list = document.body.classList;
  document.getElementById('toggler').addEventListener('change', event => {
    event.target.checked ? list.add('dark-mode') : list.remove('dark-mode');
  });
}

/* Colors */

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
  Array.from(document.getElementsByTagName('a')).forEach(e => {
    e.style.color = getRandomColor();
  });
}

function setColorHoverListener() {
  Array.from(document.querySelectorAll('a, button')).forEach(e => {
    e.addEventListener('mouseover', setRandomLinkColor);
  });
}

/* Photos */

function setRandomPhoto() {
  let num = Math.floor(Math.random() * 9) + 1;
  document.getElementById('propic').src = `img/face${num}.jpg`;
}

/* Bio Toggles */

function setBioEventListener() {
  Array.from(document.getElementsByTagName('button')).forEach(e => {
    e.addEventListener('click', bioToggle);
  });
}

function bioToggle(e) {
  let bioType = e.target;
  let color = getRandomColor();
  off(bioType);
  bioType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
  document.getElementsByClassName(bioType.id)[0].classList.add('show');
}

function off(bioType) {
  Array.from(document.getElementsByTagName('button')).forEach(button => {
    button.style.borderColor = '#554d4b';
    button.style.color = '#554d4b';
  });
  Array.from(document.getElementsByClassName('bio')).forEach(e => {
    e.classList.remove('show');
  });
}

