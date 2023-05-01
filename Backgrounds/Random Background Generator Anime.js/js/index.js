const container = document.querySelector(".container");
const generateBtn = document.querySelector(".generate-btn");
const circleBtn = document.querySelector(".circle-btn");

for (let i = 0; i < 80; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add("block");
  container.append(blocks);
}

const generate = () => {
  anime({
    targets: ".block",
    translateX: () => anime.random(-700, 700),
    translateY: () => anime.random(-500, 500),
    scale: () => anime.random(1, 5),
  });
};

const renderBlocks = () => {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((el) => (el.style.display = "block"));
  generate();
};

generateBtn.addEventListener("click", () => {
  renderBlocks();
});

circleBtn.addEventListener("click", () => {
  container.classList.toggle("circle");
  renderBlocks();
});
