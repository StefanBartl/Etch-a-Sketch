/*
todo    Save Drawing fucntion
todo    Draw Frame choose
*/

// ? Constants
const wrapper = document.querySelector(".wrapper");
const wrapper_right = document.querySelector(".wrapper-right");
const gridArray = document.querySelectorAll(".grid");
const setResolution = document.querySelector(".btn-res");
const removeDrawing = document.querySelector(".btn-rem");
const colorPickerDrawing = document.querySelector("#colorPickerDrawing");
const colorPickerBackground = document.querySelector("#colorPickerBackground");
const colorPickerBorder = document.querySelector("#colorPickerBorder");
const selectBorderSize = document.querySelector("#selectBorderSize");
const resNum_first = document.querySelector(".resnumber-first");
const resNum_second = document.querySelector(".resnumber-second");
const bindbtn = document.querySelector(".bind-btn");

// ? Set starting values
resNum_first.value = 30;
resNum_second.value = 30;
colorPickerDrawing.value = "#fefefe"; // set first drawing-colour #fefefe - white
colorPickerBackground.value = "#73d216"; // set first background-colour #73d216 - green

//#region Functions

// ? Remove old wrapper-, create a new wrapper-Element and push it to DOM; R stands for RIGHT (-Side of the Layout)
function NewWrapperR() {
  // Remove the old wrapper_right
  const oldWrapperR = document.querySelector(".wrapper-right");
  oldWrapperR.remove();
  // Create new wrapper_right & append it
  const newWrapperR = document.createElement("div");
  newWrapperR.classList.add("wrapper-right");
  wrapper.appendChild(newWrapperR);
}

// ? Create the Cells od the Grid and append it to DOM
function CreateNewGrid(resNum_first, resNum_second) {
  // Get correct wrapper
  const actualWrapper_right = document.querySelector(".wrapper-right");
  // Calculate cell width and height
  const cellOffsetWidth =
    document.querySelector(".wrapper-right").offsetWidth /
    document.querySelector(".resnumber-first").value;
  const celOffsetHeight =
    document.querySelector(".wrapper-right").offsetHeight /
    document.querySelector(".resnumber-second").value;
  // Create and append the first row
  for (let column = 0; column < resNum_first; column++) {
    let firstrow = document.createElement("div");
    firstrow.classList.add("grid-firstrow");
    actualWrapper_right.appendChild(firstrow);
    // Create and append the columns
    for (let cellC = 0; cellC < resNum_second; cellC++) {
      let gridC = document.createElement("div");
      // Set grid cells attributes
      gridC.classList.add("grid");
      gridC.id = `C${column}R${cellC}`;
      gridC.style.height = `${celOffsetHeight}px`;
      gridC.style.width = `${cellOffsetWidth}px`;
      gridC.style.backgroundColor = colorPickerBackground.value;
      // Append the grid cell to corresponend first row cell
      firstrow.appendChild(gridC);
    ;}
  };
};

// ? Add drawing function
function DrawFunction() {
  // get all cells of the grid
  const actualGridArray = document.getElementsByClassName("grid");
  // console.log(gridArrayA);
  // Loop trough grid array
  for (let cell = 0; cell < actualGridArray.length; cell++) {
    // Every cell get a Event-Listener
    actualGridArray[cell].addEventListener("mouseenter", function () {
      // If the mouse enters the cell of the grid.....
      actualGridArray[cell].setAttribute("data-active", "1");
      actualGridArray[cell].style.backgroundColor = document.querySelector(
        "#colorPickerDrawing"
      ).value;
    });
  }
}

// ? Set the border width and colour of the grid
function SetBorder (borderColour) {
  // Get actual grid and loop trogh it
  const actualGridArray = document.querySelectorAll(".grid");
  for (let cell = 0; cell < actualGridArray.length; cell++) { 
  actualGridArray[cell].style.border = `solid ${selectBorderSize.value}px ${document.querySelector("#colorPickerBorder").value}`;
  }
}

// ? Set only border colour of the grid
function ChangeBorderColour () {
  // Get actual grid and loop trogh it
  const actualGridArray = document.querySelectorAll(".grid");
  for (let cell = 0; cell < actualGridArray.length; cell++) {
      actualGridArray[cell].style.borderColor = colorPickerBorder.value;
  }
}

// ? Change the colour of the grid background
function ChangeBackgroundColour () {
  // Get actual grid and loopr trough it
  const actualGridArray = document.querySelectorAll(".grid");
  for (let cell = 0; cell < actualGridArray.length; cell++) {
    if (actualGridArray[cell].getAttribute("data-active") !== "1")
      // Select all cells which are not been drawed yet and change background color
      actualGridArray[cell].style.backgroundColor =
        document.querySelector("#colorBackground").value;
  };
};

// ? Change the colour to "draw"
function ChangeDrawingColour () {
  // Get actual grid and loop trogh it
  const actualGridArray = document.querySelectorAll(".grid");
  for (let cell = 0; cell < actualGridArray.length; cell++) {
    // If the cell has the attribute data-active set to "1", then it was hovered before and the background color is set to the Drawing color
    if (actualGridArray[cell].getAttribute("data-active") === "1")
      actualGridArray[cell].style.backgroundColor = colorPickerDrawing.value;
  };
};

// ? Create a new sheet - removes old Wrapper, creates and append new one
function NewSheet(resNum_first, resNum_second) {
  NewWrapperR();
  CreateNewGrid(resNum_first, resNum_second);
  SetBorder();
  DrawFunction();
}

// ? Remove the drawing from the sheet
function RemoveSheet () {
  // Get actual grid and loop trough it
  const actualGridArray = document.querySelectorAll(".grid");
  for (let cell = 0; cell < actualGridArray.length; cell++) {
    // Set back the background to each cell to the color of the actual 'sheet'
    actualGridArray[cell].style.backgroundColor =
      actualGridArray[0].style.backgroundColor;
  };
};

//#endregion

//#region Event-Listener

// ? Event Listener: New grid with new Resolution
setResolution.addEventListener("click", function () {
  // Invoke a New Sheet with correct (user input) values
  let newRes_first = document.querySelector(".resnumber-first").value;
  let newRes_second = document.querySelector(".resnumber-second").value;
  NewSheet(newRes_first, newRes_second);
});

// ? Remove the drawing Event-Listener
removeDrawing.addEventListener("click", RemoveSheet);

// ? Change the color of the drawing Event-Listener
colorPickerDrawing.addEventListener("input", ChangeDrawingColour);

// ? Change the color of the background function
colorPickerBackground.addEventListener("input", ChangeBackgroundColour);


// ? Change the color of the border Event-Listener
colorPickerBorder.addEventListener("input", ChangeBorderColour);

// ? Change the size of the border Event-Listener
selectBorderSize.addEventListener("input", SetBorder);

//#endregion

//#region Toggle resolution values

// ? Functions to bind the numbers in the input forms to eachother

function DoubleFirst() {
  // Set second value to first
  document.querySelector(".resnumber-second").value =
    document.querySelector(".resnumber-first").value;
};

function DoubleSecond() {
  // Set first value to second
  document.querySelector(".resnumber-first").value =
    document.querySelector(".resnumber-second").value;
};

bindbtn.addEventListener("click", () => {
  // Toggle bind data-attribute (at start it is set to on)
  bindbtn.getAttribute("data-bind") === "off"
    ? bindbtn.setAttribute("data-bind", "on")
    : bindbtn.setAttribute("data-bind", "off");

  // Binding depends on bind data-attribute state
  if (bindbtn.getAttribute("data-bind") === "on") {
    resNum_first.addEventListener("input", DoubleFirst);
    resNum_second.addEventListener("input", DoubleSecond);
  } else {
    resNum_first.removeEventListener("input", DoubleFirst);
    resNum_second.removeEventListener("input", DoubleSecond);
  }
});

//#endregion

// ? === Start  ===
// ! === Page ===

// Start / Initiate the application with invoke the grid with starting values
NewSheet(resNum_first.value, resNum_second.value);

