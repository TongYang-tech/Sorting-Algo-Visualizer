/**
 * Title: Sorting Visualizer
 * Author: Tong Yang
 * Email: tongyang80@yahoo.com
 * Persons: none
 * Online Sources: 
 * 
 * 
 */
let array_Size = document.querySelector('#arraySize');
let delayElement = document.getElementById('algorithmSpeed');
const genNewArr = document.querySelector("#arrayGeneration");
let numOfBar = array_Size.value;
let arr = [];
let delay = 100;

genNewArr.addEventListener("click", function(){
    console.log(array_Size.value);
    console.log(delay);
    enableSize();
    enableButtons();
    arrayGeneration(array_Size.value);
});

delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 300 - parseInt(delayElement.value);
});

array_Size.addEventListener('input', function(){
    console.log(array_Size.value, typeof(array_Size.value));
    arrayGeneration(parseInt(array_Size.value));
});

arrayGeneration();

function arrayGeneration(){
    updateBar();
    arr = [];
    for(var i = 0; i < numOfBar; i++) {
        arr.push(Math.floor(Math.random() * (array_Size.max - array_Size.min + 1) + array_Size.min));
    }
    console.log(arr);
    const bars = document.querySelector("#bars");
    for(var i = 0; i < numOfBar; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${arr[i] * 0.7}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function updateBar(){
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

function enableArr(){
    document.querySelector("#arrayGeneration").disabled = false;
}

function enableSize(){
    document.querySelector("#arraySize").disabled = false;
}

function enableButtons(){
    document.querySelector(".Insert").disabled = false;
    document.querySelector(".Select").disabled = false;
    document.querySelector(".Merge").disabled = false;
    document.querySelector(".Bubble").disabled = false;
    document.querySelector(".Quick").disabled = false;
    document.querySelector(".Heap").disabled = false;
}

function disableArr(){
    document.querySelector("#arrayGeneration").disabled = true;
}

function disableSize(){
    document.querySelector("#arraySize").disabled = true;
}

function disableButtons(){
    document.querySelector(".Insert").disabled = true;
    document.querySelector(".Select").disabled = true;
    document.querySelector(".Merge").disabled = true;
    document.querySelector(".Bubble").disabled = true;
    document.querySelector(".Quick").disabled = true;
    document.querySelector(".Heap").disabled = true;
}

function timer(milisec){
    return new Promise(resolve => {
        setTimeout(() => {resolve('')}, milisec);
    })
}

function swap(el1, el2){
    console.log('Swap()');
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}
