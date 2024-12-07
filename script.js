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
    } else {
        for (let i = 0; i < 24; i++) {
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
    
function givePresent() {
    let presents = [
        "&#x1F36C;", //Candy
        "&#x1F3C2;", //Snowboarder
        "&#x1F47C;", //Baby Angel
        "&#x1F381;", //Wrapped Gift
        "&#x1F389;", //Party popper
        "&#x1F3BF;", //Ski and ski boot
        "&#x1F38A;", //Confetti ball
        "&#x1F387;", //Sparkler
        "&#x1F36B;", //Chocolate bar
        "&#x1F9E7;", //Red envelope
        "&#x1F36A;", //Cookie
        "&#x1F36D;", //Lollipop
        "&#x1F936;", //Mrs. Claus
        "&#x1F9E3;", //Scarf
        "&#x1F370;", //Cake
        "&#x1F9E6;", //Socks
        "&#127876;", //Christmas tree
        "&#x26C4;", //Snowman
        "&#x1F9E5;", //Winter coat
        "&#x1F462;", //Boots
        "&#x1F941;", //Drum
        "&#x1F37E;", //Bottle with popping cork 
        "&#x1F385;", //Santa Claus //24
        "&#x1F36E;", //Custard
        "&#x1F37A;", //Beer mug 
        "&#x2744;", //Snow flake
        "&#x2603;", //Snowman with snow
        "&#x1F386;", //Firewood
        "&#x1F943;", //Tumbler glass
        "&#x1F56F;", //Candle
        "&#x1F328;", //Cloud with Snow
        "&#x1F3BA;", //Trumpet
        "&#x1F3B7;", //Saxophone
        "&#x1FA97;", //Accordion
        "&#x1F3BB;", //Violin
        "&#x1F3B5;", //Musical note
        "&#x1F3B6;", //Musical notes
    ]
    let todayPresent = presents[day - 1]
    present.innerHTML = todayPresent;
}
givePresent();