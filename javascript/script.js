// #region Table of Content 
/*    
!                 Etch-a-Sketch Main-Javascript-Stylesheet
?                                    powered by
!                                     Stefan Bartl
!                      (WKDSteVIE / WKDMinerva)
?                                          2021                                                                                                                                                                        
?                  ________________________________                                                                                                                                                                                                  
!                                   Table of Content
?                                     -) Variables & Value           
?                                     -) Language / Translation                                                                                     
?                                     -) Functions
?                                     -) Event-Listener
?                                     -) Start the application
todo           Javascript - What a wonderful & tricky language !                                                                                                                                                                                                                                                                                                                                                                 */
//#endregion


//#region Variables & Values

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
const mylogo = document.querySelector(".mylogo");
const githublogo = document.querySelector(".githublogo");

// ? Set starting values
resNum_first.value = 30;
resNum_second.value = 30;
colorPickerDrawing.value = "#fefefe"; // set first drawing-colour #fefefe - white
colorPickerBackground.value = "#73d216"; // set first background-colour #73d216 - green
colorPickerBorder.value = "#1d1d1d"; // set first border-colour #1d1d1d - darkgrey;

// ? DOM-Elements only for translation 
const headline_div = document.querySelector(".headline-div");
const headlineImage = document.querySelector(".headline-image");
const headline_p1 = document.querySelector(".headline-p1");
const headline_p2 = document.querySelector(".headline-p2");
const changeResolution = document.querySelector(".change-resolution");
const changeResolutionHeadline = document.querySelector(".change-resolution-headline");
const resnumberTo = document.querySelector(".resnumber-to");
const changeColour = document.querySelector(".change-colour");
const changeColourHeadline = document.querySelector(".change-colour-headline");
const borderText = document.querySelector(".border-text");
const languageText = document.querySelector(".language-text");

//#endregion


//#region Language / Translation

// ? Setup Translation 
// get setted language from local storage or browser language and store it there
const language = localStorage.language || navigator.language;
// This is not the best way, regexp would be better to proof of 'de'
language[0] === "d" && language[1] === "e" ? localStorage.language = "de" : "en";

// ? English Library
function English(){
headline_div.title = "A Project-Work from Steve Bartl.";
headline_p1.innerText = "Digital.";
headline_p2.innerText = "Drawboard.";
headlineImage.alt = "Icon of an analog Etch-a-Sketch Game";
changeResolution.title = "Hint: Don't go higher than 100x100 due tue performance issues!";
changeResolutionHeadline.innerText = "Resolution-Size";
bindbtn.innerText = "unbind";
bindbtn.title = "Click to bind/unbind the x and y values!";
setResolution.innerText = "New Resolution";
setResolution.title = "Click to remove the actual sheet and a new one with the resolution you choose!";
removeDrawing.innerText = "Remove Drawing";
removeDrawing.title = "Click to remove the drawing and get a brandnew sheet of 'paper' !";
changeColour.title = "Change Drawing or Background-Colours!";
changeColourHeadline.innerText = "Colour";
colorPickerDrawing.innerText = "Drawing";
colorPickerBackground,innerText = "Background";
borderText.innerText = "Border";
mylogo.title = "Click to jump to my personal Portfolio!";
mylogo.alt = "My actual personal Logo";
githublogo.title="Click to jump to the Github-Repository of this project!";
githublogo.alt= "Github Logo";

languageText.innerText = ".de";
languageText.title = "Translate Page to German";
}

// ? German Library
function German(){
headline_div.title = "Ein Projekt von Steve Bartl.";
headline_p1.innerText = "Digitales.";
headline_p2.innerText = "Reißbrett.";
headlineImage.alt = "Logo eines analogen Etch-a-Sketcch Spiels";
changeResolution.title = "Tipp: Bleibe unter 100x100 aus Perfomance Gründen!";
changeResolutionHeadline.innerText = "Auflösungs-Größe";
bindbtn.innerText = "lösen";
bindbtn.title = "Klicke um die x und y Werte zu binden / zu lösen!";
setResolution.innerText = "Neue Auflösung";
setResolution.title = "Klicke um das aktuelle Blatt zu verwerfen und ein neues mit neuer Auflösung zu öffnen!";
removeDrawing.innerText = "Lösche deine Zeichnung";
removeDrawing.title = "Klicke um die Zeihung zu löschen und ein brandneues Blatt 'Papier* zu bekommen !";
changeColour.title = "Hintergung- und Zeihnungsfarbe ändern";
changeColourHeadline.innerText = "Farbe";
colorPickerDrawing.innerText = "Zeichung";
colorPickerBackground,innerText = "Hintergrund";
borderText.innerText = "Rand";
mylogo.title = "Klicke um zu meiner persönlichen Portfolio-Page zu springen!";
mylogo.alt = "Mein aktuelles persönliches Logo";
githublogo.title="klicke um zum Guthub-Repository dieses Projekts zu springen!";
githublogo.alt= "Github Logo";

languageText.innerText = ".en";
languageText.title = "Übersetze diese Seite auf English";
}

// ? Initial Translation
localStorage.language === "en" ? English() : German();

// ? Change Language
languageText.addEventListener("click", ()=>{
  // Check for the actual language
  if(localStorage.language === "en"){
    // Invoke opposite language
    German();
    // Store new language in localStorage
    localStorage.language = "de";
  } else {
    English();
    localStorage.language = "en";
  };
})

//#endregion


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


// ? Create the Cells od the Grid and append it to DOM
function CreateNewGrid(resNum_first, resNum_second) {
  // Get correct wrapper
  const actualWrapper_right = document.querySelector(".wrapper-right");

  // Calculate cell width and height
  const cellOffsetWidth =
    document.querySelector(".wrapper-right").offsetWidth /
    document.querySelector(".resnumber-first").value;
  const cellOffsetHeight =
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
      gridC.style.height = `${cellOffsetHeight}px`;
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
        document.querySelector("#colorPickerBackground").value;
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


// ? Open a new browser tab 
function OpenInNewTab(href) {
  Object.assign(document.createElement('a'), {
    target: '_blank',
    href: href,
  }).click();
};

//#endregion


//#region Event-Listener

// ? Bind the x value to the y value
resNum_first.addEventListener("input", DoubleFirst);
resNum_second.addEventListener("input", DoubleSecond);

// ? Toggle binding
bindbtn.addEventListener("click", () => {
  // Toggle bind data-attribute (at start it is set to on)
  bindbtn.getAttribute("data-bind") === "off"
    ? bindbtn.setAttribute("data-bind", "on")
    : bindbtn.setAttribute("data-bind", "off");

  // Binding depends on bind data-attribute state
  if (bindbtn.getAttribute("data-bind") === "on") {
    resNum_first.addEventListener("input", DoubleFirst);
    resNum_second.addEventListener("input", DoubleSecond);
    localStorage.language === "en" 
      ? document.querySelector(".bind-btn").innerText = "unbind"
      : document.querySelector(".bind-btn").innerText = "lösen";
    } else {
    resNum_first.removeEventListener("input", DoubleFirst);
    resNum_second.removeEventListener("input", DoubleSecond);
    localStorage.language === "en" 
      ? document.querySelector(".bind-btn").innerText = "bind"
      : document.querySelector(".bind-btn").innerText = "binden";
  }
});

// ? New grid with new Resolution 
setResolution.addEventListener("click", function () {
  // Invoke a New Sheet with correct (user input) values
  let newRes_first = document.querySelector(".resnumber-first").value;
  let newRes_second = document.querySelector(".resnumber-second").value;
  NewSheet(newRes_first, newRes_second);
});

// ? Remove the drawing 
removeDrawing.addEventListener("click", RemoveSheet);

// ? Change the color of the drawing
colorPickerDrawing.addEventListener("input", ChangeDrawingColour);

// ? Change the color of the background
colorPickerBackground.addEventListener("input", ChangeBackgroundColour);

// ? Change the color of the border
colorPickerBorder.addEventListener("input", ChangeBorderColour);

// ? Change the size of the border
selectBorderSize.addEventListener("input", SetBorder);

// ? Jump to my Portfolio
mylogo.addEventListener("click", ()=>{
  OpenInNewTab("https://stefanbartl.github.io/Portfolio/");
});

// ? Jump to the Project Github-Repository
githublogo.addEventListener("click", ()=>{
  OpenInNewTab("https://github.com/StefanBartl/Etch-a-Sketch");
});
//#endregion


// ?      === Start  ===
// todo ===  the   ===
// !       === Page ===

// Start / Initiate the application by invoking the grid with the starting values
NewSheet(resNum_first.value, resNum_second.value);

