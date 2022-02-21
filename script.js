const gridContainer = document.querySelector(".game-grid-container");
let playerPosition = 0;

for (let i = 1; i <= 121; i++) {
  let gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridItem.setAttribute("id", `grid-item${i}`);
  gridContainer.append(gridItem);
}

movePlayer = (e) => {
  switch (e.key) {
    case "ArrowLeft":
      playerPosition -= 1;
      console.log(playerPosition);
      break;
    case "ArrowRight":
      playerPosition += 1;
      break;
    case "ArrowUp":
      playerPosition -= 11;
      break;
    case "ArrowDown":
      playerPosition += 11;
      break;
  }
};

document.addEventListener("keyup", movePlayer);
