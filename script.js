// Variables
const colorPicker = document.querySelector("#colorPicker");
let colorPickerValue = document.querySelector("#colorPicker").value;

let gridActiveColor = "#fff000"; 

const colorBackground = document.querySelector("#colorBackground");
let colorBackgroundValue = document.querySelector("#colorBackground").value;


function Etch (num){
const container = document.getElementById("container");

// Create the grid
for (let x = 0; x <num; x++){
    let grid = document.createElement("div");
    container.appendChild(grid);
    grid.classList.add("grid");
    grid.setAttribute("id", "firstGrids");
    let a = 960 / num;
    grid.style.height = a + "px";
    grid.style.width = a + "px";

            for (let y = 0; y <num; y++){
                let gridX = document.createElement("div");
                grid.appendChild(gridX);
                gridX.classList.add("gridX");
                let a = 960 / num;
                gridX.style.height = a + "px";
                gridX.style.width = a + "px";
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
}

}

// Get the value from the form
let number = parseInt(document.querySelector("#firstG").value);
// Invoke grid with new values
Etch(number);


// New grid with new Resolution function
const newGrid = document.querySelector("#btn");
newGrid.addEventListener('click', function(){
    const container = document.getElementById("container");
    container.remove();
    const newContainer = document.createElement("div");
    newContainer.setAttribute("id", "container");
    const wrapper = document.getElementById("wrapper");
    wrapper.appendChild(newContainer);

    let newNum = parseInt(document.querySelector("#firstG").value);
    Etch(newNum);
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