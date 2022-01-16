// Variables
const colorPicker = document.querySelector("#colorPicker");
let colorPickerValue = document.querySelector("#colorPicker").value;

let gridActiveColor = "#fff000"; 

const colorBackground = document.querySelector("#colorBackground");
let colorBackgroundValue = document.querySelector("#colorBackground").value;


function Etch (f, g){
const container = document.getElementById("container");
let z = f;
let zz = g;

// Create the grid
for (let x = 0; x <z; x++){
    let grid = document.createElement("div");
    container.appendChild(grid);
    grid.classList.add("grid");
    grid.setAttribute("id", "firstGrids");
    let newHeight = 960 / z;
    grid.style.height = newHeight + "px";
    grid.style.width = newHeight + "px";

            for (let x = 0; x <zz; x++){
                let gridX = document.createElement("div");
                grid.appendChild(gridX);
                gridX.classList.add("gridX");
                let newHeight = 960 / zz;
                gridX.style.height = newHeight + "px";
                gridX.style.width = newHeight + "px";
                gridX.style.backgroundColor = colorBackgroundValue;
            }
}

// Add drawing function via EventListener
const gridArray = document.querySelectorAll(".gridX");
for (let c = 0; c < gridArray.length; c++){
    gridArray[c].addEventListener('mouseenter', 
    function(){
        gridArray[c].style.backgroundColor = gridActiveColor;
        gridArray[c].classList.add("gridActive");
    
    });
    gridArray[c].addEventListener('touchmove', 
    function(){
        gridArray[c].style.backgroundColor = gridActiveColor;
        gridArray[c].classList.add("gridActive");
})
}

}

// Get the values from the form
let f = parseInt(document.querySelector("#firstG").value);
let g = parseInt(document.querySelector("#secoundG").value);
// Invoke grid with new values
Etch(f, g);


// New grid with new Resolution function
const newGrid = document.querySelector("#btn");
newGrid.addEventListener('click', function(){
    const container = document.getElementById("container");
    container.remove();
    const newContainer = document.createElement("div");
    newContainer.setAttribute("id", "container");
    const wrapper = document.getElementById("wrapper");
    wrapper.appendChild(newContainer);

    let h = parseInt(document.querySelector("#firstG").value);
    let i = parseInt(document.querySelector("#secoundG").value);
    Etch(h, i);
});

// Remove drawing function
const remove = document.getElementById("btnRemove");
remove.addEventListener("click", function(){
    const gridArray = document.querySelectorAll(".gridX");
    for (let c = 0; c < gridArray.length; c++){
    gridArray[c].style.backgroundColor = colorBackgroundValue}});

// Change the color of the drawing function
colorPicker.addEventListener('input', function(){
    colorPickerValue = colorPicker.value;
    const gridActiveArray = document.querySelectorAll(".gridActive");
    for (let c = 0; c < gridActiveArray.length; c++){
    gridActiveArray[c].style.backgroundColor = colorPickerValue;
    };
    gridActiveColor = colorPickerValue;
})

// Change the color of the background function
colorBackground.addEventListener('input', function(){
    colorBackgroundValue = colorBackground.value;
    const gridArray = document.querySelectorAll(".gridX");
    for (let c = 0; c < gridArray.length; c++){
        if (!gridArray[c].classList.contains("gridActive")) //Make sure, the Grid Element isn't drawed. Otherwise some would delete the drawing if changing background color. It's because we want only to change the background - except the backgrond of the drawing elements.
        gridArray[c].style.backgroundColor = colorBackgroundValue;
    }}
);

//Double the Numbers in the forms function
let firstN = document.querySelector("#firstG");
let secoundN = document.querySelector("#secoundG");
firstN.addEventListener('input', function(){
    document.querySelector("#secoundG").value = document.querySelector("#firstG").value;
});
secoundN.addEventListener('input', function(){
    document.querySelector("#firstG").value = document.querySelector("#secoundG").value;
});