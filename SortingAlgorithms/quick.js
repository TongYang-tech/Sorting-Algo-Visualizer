/**
 * Title: Sorting Visualizer
 * Author: Tong Yang
 * Email: tongyang80@yahoo.com
 * Persons: none
 * Online Sources: 
 * 
 * 
 */
async function partition(arrBar, leftIdx, rightIdx){
    arrBar[rightIdx].style.background = 'orange';
    let idxOfRightPosPiv = leftIdx - 1;
    for(let i = leftIdx; i <= (rightIdx - 1); i++){
        arrBar[i].style.background = 'lightblue';
        await timer(delay);
        if(parseInt(arrBar[i].style.height) < parseInt(arrBar[rightIdx].style.height)){
        idxOfRightPosPiv++;
        swap(arrBar[idxOfRightPosPiv], arrBar[i]);
        arrBar[idxOfRightPosPiv].style.background = 'purple';
            if(idxOfRightPosPiv != i) arrBar[i].style.background = 'purple';
        await timer(delay);
        } else {
            arrBar[i].style.background = 'pink';
        }
    }
    idxOfRightPosPiv++;
    await timer(delay);
    swap(arrBar[idxOfRightPosPiv], arrBar[rightIdx]);
    arrBar[rightIdx].style.background = 'pink';
    arrBar[idxOfRightPosPiv].style.background = 'green';
    await timer(delay);
    for(let j = 0; j < arrBar.length; j++){
        if(arrBar[j].style.background != 'grey'){
            arrBar[j].style.background = 'pink';
        }
    }
    return idxOfRightPosPiv;
}
async function quickSort(arrBar, low, high){
    if(low < high){
        let partitionIdx = await partition(arrBar, low, high);
        await quickSort(arrBar, low, partitionIdx - 1);
        await quickSort(arrBar, partitionIdx + 1, high);
    } else {
        if(low >= 0 && high >= 0 && low < arrBar.length && high > arrBar.length){
            arrBar[low].style.background = 'green';
            arrBar[high].style.background = 'green';
        }
    }
}

const quickButton = document.querySelector(".Quick");
quickButton.addEventListener('click', async function(){
    let barEle = document.querySelectorAll('.bar');
    let leftIdx = 0;
    let rightIdx = parseInt(barEle.length) - 1;
    disableButtons();
    disableSize();
    disableArr();
    await quickSort(barEle, leftIdx, rightIdx);
    enableButtons();
    enableSize();
    enableArr();
});
