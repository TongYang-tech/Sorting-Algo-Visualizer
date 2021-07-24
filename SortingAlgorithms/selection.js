/**
 * Title: Sorting Visualizer
 * Author: Tong Yang
 * Email: tongyang80@yahoo.com
 * Persons: none
 * Online Sources: 
 * 
 * 
 */
async function selection(){
    const adjBar = document.querySelectorAll(".bar");
    let minIdx;
    for(let i = 0; i < adjBar.length; i++){
        minIdx = i;
        adjBar[i].style.background = 'white';
        for(let j = i + 1; j < adjBar.length; j++){
            adjBar[j].style.background = 'white';
            await timer(delay);
            if(parseInt(adjBar[j].style.height) < parseInt(adjBar[minIdx].style.height)){
                if(minIdx != i){
                    adjBar[minIdx].style.background = 'red';
                }
                minIdx = j;
            } else {
                adjBar[j].style.backgroun = 'red';
            }
        }
        await timer(delay);
        swap(adjBar[minIdx], adjBar[i]);
        adjBar[minIdx].style.background = 'red';
        adjBar[i].style.background = 'pink';
    }
}
const selectionButton = document.querySelector(".Select");
selectionButton.addEventListener('click', async function(){
    disableButtons();
    disableSize();
    disableArr();
    await selection();
    enableButtons();
    enableSize();
    enableArr()
});