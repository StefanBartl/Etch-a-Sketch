

// Variables
const colorPicker = document.querySelector(".colorPicker");
let colorPickerValue = document.querySelector(".colorPicker").value;
const colorBackground = document.querySelector(".colorBackground");
let colorBackgroundValue = document.querySelector(".colorBackground").value;

let gridActiveColor = colorPickerValue;

const remove = document.querySelector(".drawing__btn-rem");
const container = document.querySelector(".container");

let firstN = document.querySelector(".form__first");
let secoundN = document.querySelector(".form__second");

function NewResolution (num){

// Create the first row
for (let x = 0; x <num; x++){
    let grid = document.createElement("div");
    // Get actual container amd append new grid
    actContainer = document.querySelector(".container");
    actContainer.appendChild(grid);
    grid.classList.add("grid");
    let a = 960 / num;
    grid.style.height = a + "px";
    grid.style.width = a + "px";
            // Create the columns
            for (let y = 0; y <num; y++){
                let gridX = document.createElement("div");
                grid.appendChild(gridX);
                gridX.classList.add("gridX");
                let a = 960 / num;
                gridX.style.height = a + "px";
                gridX.style.width = a + "px";
                gridX.style.backgroundColor = colorBackground.value;
            };
};

//console.log(`NewResolution() end.`);
};

// ? Start application
// Get the value from the form
let number = parseInt(document.querySelector(".form__first").value);
// Invoke grid with new values
NewResolution(number);

//#region Event-Listener

// ! New grid with new Resolution 
const newGrid = document.querySelector(".drawing__btn-res");
newGrid.addEventListener('click', function(){
    // Remove the old container
    const container = document.querySelector(".container");
    container.remove();
    // Create new container & append it
    const newContainer = document.createElement("div");
    newContainer.classList.add("container");
    const drawing__wrapper = document.querySelector(".drawing__wrapper");
    drawing__wrapper.appendChild(newContainer);

    // Invoke Etch() with new resolution
    let newNum = parseInt(document.querySelector(".form__first").value);
    NewResolution(newNum);
});

// ! Add drawing Event-Listener
const gridArray = document.querySelectorAll(".gridX");
for (let c = 0; c < gridArray.length; c++){
    gridArray[c].addEventListener('mouseenter', 
    function(){
        gridArray[c].style.backgroundColor = gridActiveColor;
        gridArray[c].classList.add("gridActive");
    });
};

// ! Change the color of the drawing Event-Listener
colorPicker.addEventListener('input', function(){
    colorPickerValue = colorPicker.value;
    const gridActiveArray = document.querySelectorAll(".gridActive");
    for (let cell = 0; cell < gridActiveArray.length; cell++){
    gridActiveArray[cell].style.backgroundColor = colorPickerValue;
    };
    gridActiveColor = colorPickerValue;
})

// ! Remove drawing Event-Listener
remove.addEventListener("click", function(){
    const gridArray = document.querySelectorAll(".gridX");
    for (let cell = 0; cell < gridArray.length; cell++){
    gridArray[cell].style.backgroundColor = colorBackgroundValue}});


// ! Change the color of the background function
colorBackground.addEventListener('input', function(){
    colorBackgroundValue = colorBackground.value;
    const gridArray = document.querySelectorAll(".gridX");
    for (let c = 0; c < gridArray.length; c++){
        if (!gridArray[c].classList.contains("gridActive")) //Make sure, the Grid Element isn't drawed. Otherwise some would delete the drawing if changing background color. It's because we want only to change the background - except the backgrond of the drawing elements.
        gridArray[c].style.backgroundColor = colorBackgroundValue;
}}
);


//#endregion


// ? Double the Numbers in the forms function
firstN.addEventListener('input', function(){
    document.querySelector(".form__second").value = document.querySelector(".form__first").value;
});
secoundN.addEventListener('input', function(){
    document.querySelector(".form__first").value = document.querySelector(".form__second").value;
});

