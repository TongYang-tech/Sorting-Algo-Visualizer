/**
 * Title: Sorting Visualizer
 * Author: Tong Yang
 * Email: tongyang80@yahoo.com
 * Persons: none
 * Online Sources: 
 * https://www.w3schools.com/tags/tag_input.asp; Helped me learn how to use inputs
 * https://css-tricks.com/css-grid-in-ie-debunking-common-ie-grid-misconceptions/; grid layout
 * https://www.w3schools.com/cssref/css3_pr_mediaquery.asp; @media query
 * 
 */
let array_Size = document.getElementById('arraySize');
let array_Speed = document.getElementById("algorithmSpeed");
let gen_Array = document.getElementById("arrayGeneration");
let numOfBar = array_Size.value;
let algo_Buttons = document.querySelectorAll(".algoButtons button");
var container = document.getElementById("arrayContainer");
container.style="flex-direction:row";
let divHeight = [];
const divs = [];
const marginSize = 5;
var barStyle;
gen_Array.addEventListener("click", arrayGeneration);
array_Size.addEventListener("input", updateArraySize);

function arrayGeneration(){
    container.innerHTML="";
    for(var i = 0; i < numOfBar; i++){
        divHeight.push(Math.floor(Math.random() * (array_Size.max - array_Size.min + 1) + array_Size.min));
        divs[i] = document.createElement("div");
        container.appendChild(divs[i]);
        divs[i].style="margin: 0% 3px; width: 2px; height: 20px; background-color:pink; display: inline-block;";
    }
}

function updateArraySize(){
    numOfBar = array_Size.value;
    arrayGeneration();
}

window.onload = updateArraySize();
