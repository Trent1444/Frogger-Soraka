const gridContainer = document.querySelector(".game-grid-container");
let playerPosition = 0;

for (let i = 1; i <= 121; i++) {
  let gridItem = document.createElement("div");
  gridItem.classList.add("test");
  gridContainer.append("gridItem");
  console.log(i);
}

movePlayer = (e) => {
  switch (e.key) {
    case "ArrowLeft":
      playerPosition -= 1;
      console.log(playerPosition);
      break;
  }
};
document.addEventListener("keyup", movePlayer);
