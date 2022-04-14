/*
todo    Save Drawing fucntion

*/
// Variables 15174c
let colorPicker = document.querySelector("#colorPicker");
let colorBackground = document.querySelector("#colorBackground");
const remove = document.querySelector(".btn-rem");
const container = document.querySelector(".wrapper-right");

const firstN = document.querySelector(".resnumber-first");
const secoundN = document.querySelector(".resnumber-second");

colorBackground.value = "#73d216"; // set first background-colour #73d216 - green
colorPicker.value = "#fefefe"; // set first drawing-colour #fefefe - white

// ? Start application
// Get the value from the form
let number = parseInt(document.querySelector(".resnumber-first").value);
// Invoke grid with new values
NewResolution(number);

//#region Event-Listener

// ! New grid with new Resolution
const newGrid = document.querySelector(".btn-res");
newGrid.addEventListener("click", function () {
  // Remove the old container
  const container = document.querySelector(".wrapper-right");
  container.remove();
  // Create new container & append it
  const newContainer = document.createElement("div");
  newContainer.classList.add("wrapper-right");
  const drawing__wrapper = document.querySelector(".drawing__wrapper");
  drawing__wrapper.appendChild(newContainer);

  // Invoke Etch() with new resolution
  let newNum = parseInt(document.querySelector(".resnumber-first").value);
  NewResolution(newNum);
});

// ! Add drawing Event-Listener
const gridArray = document.querySelectorAll(".gridX");
for (let c = 0; c < gridArray.length; c++) {
  gridArray[c].addEventListener("mouseenter", function () {
    gridArray[c].style.backgroundColor = colorPicker.value;
    gridArray[c].classList.add("gridActive");
  });
}

// ! Change the color of the drawing Event-Listener
colorPicker.addEventListener("input", function () {
  const gridActiveArray = document.querySelectorAll(".gridActive");
  for (let cell = 0; cell < gridActiveArray.length; cell++) {
    gridActiveArray[cell].style.backgroundColor = colorPicker.value;
  }
});

// ! Remove drawing Event-Listener
remove.addEventListener("click", function () {
  const gridArray = document.querySelectorAll(".gridX");
  for (let cell = 0; cell < gridArray.length; cell++) {
    gridArray[cell].style.backgroundColor = colorBackground.value;
  }
});

// ! Change the color of the background function
colorBackground.addEventListener("input", function () {
  colorBackgroundValue = colorBackground.value;
  const gridArray = document.querySelectorAll(".gridX");
  for (let c = 0; c < gridArray.length; c++) {
    if (!gridArray[c].classList.contains("gridActive"))
      //Make sure, the Grid Element isn't drawed. Otherwise some would delete the drawing if changing background color. It's because we want only to change the background - except the backgrond of the drawing elements.
      gridArray[c].style.backgroundColor = colorBackgroundValue;
  }
});

//#endregion

// ? Double the Numbers in the forms function

firstN.addEventListener("input", function () {
  document.querySelector(".resnumber-second").value =
    document.querySelector(".resnumber-first").value;
});

secoundN.addEventListener("input", function () {
  document.querySelector(".resnumber-first").value =
    document.querySelector(".resnumber-second").value;
});

function NewResolution(num) {
    // Create the first row
    for (let x = 0; x < num; x++) {
      let grid = document.createElement("div");
      // Get actual container amd append new grid
      actContainer = document.querySelector(".wrapper-right");
      actContainer.appendChild(grid);
      grid.classList.add("grid");
      let a = 960 / num;
      grid.style.height = a + "px";
      grid.style.width = a + "px";
      // Create the columns
      for (let y = 0; y < num; y++) {
        let gridX = document.createElement("div");
        grid.appendChild(gridX);
        gridX.classList.add("gridX");
        let a = 960 / num;
        gridX.style.height = a + "px";
        gridX.style.width = a + "px";
        gridX.style.backgroundColor = colorBackground.value;
      }
    }
  
    //console.log(`NewResolution() end.`);
  }