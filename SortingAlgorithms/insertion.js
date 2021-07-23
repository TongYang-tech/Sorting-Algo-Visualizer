async function insertion(){
}

const insertSortButton = document.querySelector(".Insert");
insertSortButton.addEventListener('click', async function(){
    disableButtons();
    disableSize();
    disableArr();
    await insertion();
    enableButtons();
    enableSize();
    enableArr()
});