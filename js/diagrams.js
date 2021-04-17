
function startAnimation() {
    const elements = document.querySelectorAll('.diagram_item')
    const interval = 1
    const angle_increment = 4

    for (let elem of elements) {
        let angle = 0
        window.timer = window.setInterval(function () {
            elem.children[0].children[0].setAttribute("stroke-dasharray", angle + ", 20000")
            elem.children[0].children[1].innerHTML = parseInt(angle / 360 * 100) + '%'
            let computedAngle = Math.round(elem.children[0].dataset.diagram * 3.6)
            if (angle >= computedAngle) {
                window.clearInterval(window.timer)
            } else {
                angle += angle_increment
            }
        }.bind(this), interval)
    }
}

let index = 0

function checkAnimation() {
    const firstElem = document.querySelector('.diagram_item')
    if (window.scrollY >= getCoords(firstElem).top * 0.85 && index != 1) {
        index += 1
        startAnimation()
    }
}

window.addEventListener('scroll', () => checkAnimation())
window.removeEventListener('scroll', () => checkAnimation())