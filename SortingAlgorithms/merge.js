/**
 * Title: Sorting Visualizer
 * Author: Tong Yang
 * Email: tongyang80@yahoo.com
 * Persons: none
 * Online Sources: 
 * 
 * 
 */
async function mergeSort(arrBar, leftIdx, middleIdx, rightIdx){
    const leftLength = middleIdx - leftIdx + 1;
    const rightLength = rightIdx - middleIdx;

    let leftArrBar = new Array(leftLength);
    let rightArrBar = new Array(rightLength);

    for(let i = 0; i < leftLength; i++){
        await timer(delay);
        arrBar[leftIdx + i].style.background = 'lightblue';
        leftArrBar[i] = arrBar[leftIdx + i].style.height;
    }
    for(let j = 0; j < rightLength; j++){
        await timer(delay);
        arrBar[middleIdx + 1 + j].style.background = 'red';
        rightArrBar[j] = arrBar[middleIdx + 1 + j].style.height;
    }
    await timer(delay);

    let indexOfLeftArr = 0;
    let indexOfRightArr = 0;
    let indexMerge = leftIdx;

    while(indexOfLeftArr < leftLength && indexOfRightArr < rightLength){
        await timer(delay);
        if(parseInt(leftArrBar[indexOfLeftArr]) <= parseInt(rightArrBar[indexOfRightArr])){
            if((leftLength + rightLength) === arrBar.length){
                arrBar[indexMerge].style.background = 'pink';
            } else {
                arrBar[indexMerge].style.background = 'grey';
            }
            arrBar[indexMerge].style.height = leftArrBar[indexOfLeftArr];
            indexOfLeftArr++;
            indexMerge++;
        } else {
            if((leftLength + rightLength) === arrBar.length){
                arrBar[indexMerge].style.background = 'pink';
            } else {
                arrBar[indexMerge].style.background = 'grey';
            }
            arrBar[indexMerge].style.height = rightArrBar[indexOfRightArr];
            indexOfRightArr++;
            indexMerge++;
        }
        // indexOfLeftArr++;
    }

    while(indexOfLeftArr < leftLength){
        await timer(delay);
        if((leftLength + rightLength) === arrBar.length){
            arrBar[indexMerge].style.background = 'pink';
        } else {
            arrBar[indexMerge].style.background = 'grey';
        }
        arrBar[indexMerge].style.height = leftArrBar[indexOfLeftArr];
        indexOfLeftArr++;
        indexMerge++;
    }

    while(indexOfRightArr < rightLength){
        await timer(delay);
        if((leftLength + rightLength) === arrBar.length){
            arrBar[indexMerge].style.background = 'pink';
        } else {
            arrBar[indexMerge].style.background = 'grey';
        }
        arrBar[indexMerge].style.height = rightArrBar[indexOfRightArr];
        indexMerge++;
        indexOfRightArr++;
    }
}

async function merge(barEle, leftIdx , rightIdx){
    if(leftIdx >= rightIdx) {
        return;
    }
    const middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
    // sorts the left half of bar array
    await merge(barEle, leftIdx, middleIdx);
    // sorts the right hald of bar array
    await merge(barEle, middleIdx + 1, rightIdx);
    // merges them together
    await mergeSort(barEle, leftIdx, middleIdx, rightIdx);   
}

const mergeButton = document.querySelector(".Merge");
mergeButton.addEventListener('click', async function(){
    let barEle = document.querySelectorAll('.bar');
    let leftIdx = 0;
    let rightIdx = parseInt(barEle.length) - 1;
    disableButtons();
    disableSize();
    disableArr();
    await merge(barEle, leftIdx, rightIdx);
    enableButtons();
    enableSize();
    enableArr();
});