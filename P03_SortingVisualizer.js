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
let numOfBar = array_Size.value;
let arr = [];

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
        bar.style.height = `${arr[i] * 1}px`;
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

function updateArraySize(){
    numOfBar = array_Size.value;
    arrayGeneration();
}
