function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector('#controls input[type="number"]');
const dataCreate = document.querySelector("[data-create]");
const dataDestroy = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    size += 10;
  }

  boxes.innerHTML = "";
  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

dataCreate.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

dataDestroy.addEventListener("click", destroyBoxes);