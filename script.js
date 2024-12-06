const boxesGrid = document.querySelector('.boxes-table');
function createBoxes () {
    let html = ``
    for (let i = 0; i < 24; i++) {
        html += `
        <div class="div-box">
            Day ${i + 1}
        </div>`
    }
    boxesGrid.innerHTML = html
}
createBoxes()