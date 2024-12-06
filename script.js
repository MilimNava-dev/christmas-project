const boxesGrid = document.querySelector('.boxes-table');
const present = document.querySelector('.present-div')
const d = new Date();
const day = d.getDate();
const month = d.getMonth() + 1;

function createBoxes () {
    const daysNotAvalible = today()
    let html = ``
    for (let i = 0; i < 24; i++) {
        if (daysNotAvalible.includes(i)) {
            html += `
            <div class="div-box avalible-hover not-avalible">
                ${i + 1}
            </div>`
            continue
        } else if (i === day - 1) {
            html += `
            <div class="div-box avalible-hover today">
                ${i + 1}
            </div>`
        } else {
            html += `
            <div class="div-box avalible-hover">
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

const todayBox = document.querySelector('.today')
const allBoxes = document.querySelectorAll('.div-box')
todayBox.addEventListener('click', () => {
    allBoxes.forEach(box => {
        box.classList.remove('avalible-hover')
    })
    present.classList.add('visible')
    present.addEventListener('animationend', () => {
        const removeVisibleTimer = setTimeout(() => {
            present.classList.remove('visible')
            allBoxes.forEach(box => {
                box.classList.add('avalible-hover')
            })
            clearTimeout(removeVisibleTimer)
        },1000)
    })
})
    
