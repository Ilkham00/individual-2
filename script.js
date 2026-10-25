var counter = 0;
var counterValue = document.getElementById('counter-value');
var increaseButton = document.getElementById('increase-button');
var decreaseButton = document.getElementById('decrease-button');
var resetButton = document.getElementById('reset-button');

// one function shows the result
function updateCounter() {
  counterValue.textContent = counter;
}

increaseButton.addEventListener('click', function () {
  counter = counter + 1;
  updateCounter();
});

decreaseButton.addEventListener('click', function () {
  // no negative values
  if (counter > 0) {
    counter = counter - 1;
  }
  updateCounter();
});

resetButton.addEventListener('click', function () {
  counter = 0;
  updateCounter();
});


// ===== Task 7. Live text preview =====

var previewInput = document.getElementById('preview-input');
var previewText = document.getElementById('preview-text');
var characterCount = document.getElementById('character-count');
var clearButton = document.getElementById('clear-button');

function updatePreview() {
  var text = previewInput.value;

  if (text === '') {
    previewText.textContent = 'Your text will appear here';
  } else {
    previewText.textContent = text;
  }
  characterCount.textContent = text.length;
}

previewInput.addEventListener('input', updatePreview);

clearButton.addEventListener('click', function () {
  previewInput.value = '';
  updatePreview();
  previewInput.focus(); // the keyboard focus goes back to the input
});

updatePreview(); // show the message when the page loads


// ===== Task 8. Change an image with a select control =====

var imageSelect = document.getElementById('image-select');
var formatImage = document.getElementById('format-image');
var formatCaption = document.getElementById('format-caption');

var formats = {
  Grosh: { src: 'images/grosh.jpg', alt: 'grosh', caption: 'grosh' },
  Goddamn: { src: 'images/godamn.jpg', alt: 'ogadamn', caption: 'godamn' },
  MirJeltok : { src: 'images/jeltok.jpg', alt: 'jeltok', caption: 'jeltok' }
};

function updateImage() {
  var chosen = formats[imageSelect.value];
  formatImage.src = chosen.src;
  formatImage.alt = chosen.alt;
  formatCaption.textContent = chosen.caption;
}

imageSelect.addEventListener('change', updateImage);

updateImage(); // valid starting picture when the page loads


// ===== Task 9. Keyboard events =====

var keyInput = document.getElementById('key-input');
var keyStatus = document.getElementById('key-status');
var keyResult = document.getElementById('key-result');
var keyForm = document.getElementById('key-form');

keyInput.addEventListener('keydown', function (event) {
  // event.key of the space bar is a space character (" "), so we show the word Space
  var keyName = event.key;
  if (keyName === ' ') {
    keyName = 'Space';
  }
  keyStatus.textContent = 'Key pressed: ' + keyName;

  if (event.key === 'Enter') {
    event.preventDefault(); // no form submission
    keyResult.textContent = keyInput.value;
  }

  if (event.key === 'Escape') {
    keyInput.value = '';
    keyResult.textContent = '';
  }
});

// extra safety: the form never submits
keyForm.addEventListener('submit', function (event) {
  event.preventDefault();
});


// ===== Task 10. Mouse and focus events =====

var hoverCard = document.getElementById('hover-card');
var cardInstruction = document.getElementById('card-instruction');
var normalText = 'Move the mouse over the card, or press Tab to focus it.';

function highlightCard() {
  hoverCard.classList.add('highlight');
  cardInstruction.textContent = 'The card is highlighted!';
}

function unhighlightCard() {
  hoverCard.classList.remove('highlight');
  cardInstruction.textContent = normalText;
}

hoverCard.addEventListener('mouseenter', highlightCard);
hoverCard.addEventListener('mouseleave', unhighlightCard);
hoverCard.addEventListener('focus', highlightCard);
hoverCard.addEventListener('blur', unhighlightCard);
