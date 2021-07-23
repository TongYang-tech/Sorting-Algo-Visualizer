async function bubble() {
    const adjustBar = document.querySelectorAll(".bar");
    for(let i = 0; i < adjustBar.length - 1; i++){
        for(let j = 0; j < adjustBar.length - i - 1; j++){
            adjustBar[j].style.background = 'yellow';
            adjustBar[j + 1].style.background = 'yellow';
            if(parseInt(adjustBar[j].style.height) > parseInt(adjustBar[j + 1].style.height)){
                await timer(delay);
                swap(adjustBar[j], adjustBar[j + 1]);
            }
            adjustBar[j].style.background = 'red';
            adjustBar[j + 1].style.background = 'red';
        }
        adjustBar[adjustBar.length - 1 - i].style.background = 'pink';
    }
    adjustBar[0].style.background = 'pink';
}

const bubbleSortButton= document.querySelector(".Bubble");
bubbleSortButton.addEventListener('click', async function(){
    disableButtons();
    disableSize();
    disableArr();
    await bubble();
    enableButtons();
    enableSize();
    enableArr()
});