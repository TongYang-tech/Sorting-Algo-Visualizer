/**
 * Title: Sorting Visualizer
 * Author: Tong Yang
 * Email: tongyang80@yahoo.com
 * Persons: none
 * Online Sources: 
 * 
 * 
 */
async function heapSort(arrEle){
    let n = arrEle.length;
    for(let i = Math.floor(n / 2) - 1; i >= 0; i--){
        await timer(delay);
        heapify(arrEle, n, i);
    }

    for(let i = n - 1; i > 0; i--){
        await timer(delay);
        swap(arrEle[0], arrEle[i]);
        heapify(arr, i, 0);
    }
}

async function heapify(arrBar, n, i){
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if(left < n && parseInt(arrBar[left]) > parseInt(arrBar[largest])){
        largest = left;
    }

    if(right < n && parseInt(arrBar[right]) > parseInt(arr[largest])){
        largest = right;
    }
    console.log("largest: " + largest + ", ");
    console.log("i is: " + i + ", ");
    if(largest != i){
        await timer(delay);
        swap(arrBar[i], arrBar[largest]);
        heapify(arr, n, largest);
    }
}
const heapButton = document.querySelector(".Heap");
heapButton.addEventListener('click', async function(){
    let barEle = document.querySelectorAll('.bar');
    disableButtons();
    disableSize();
    disableArr();
    await heapSort(barEle);
    enableButtons();
    enableSize();
    enableArr();
});