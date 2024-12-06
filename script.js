const boxesGrid = document.querySelector('.boxes-table');
const d = new Date();
const day = d.getDate();
const month = d.getMonth() + 1;

function createBoxes () {
    const daysNotAvalible = today()
    let html = ``
    for (let i = 0; i < 24; i++) {
        if (daysNotAvalible.includes(i)) {
            html += `
            <div class="div-box not-avalible">
                ${i + 1}
            </div>`
            continue
        } else if (i === day - 1) {
            html += `
            <div class="div-box today">
                ${i + 1}
            </div>`
        } else {
            html += `
            <div class="div-box">
                ${i + 1}
            </div>`
        }
    }
    boxesGrid.innerHTML = html
}
createBoxes()

function today() {
    let daysNotAvalible = []
    if (month === 12) {
        for (let i = day; i < 24; i++) {
            daysNotAvalible.push(i)
        }
    }
    return daysNotAvalible
}
