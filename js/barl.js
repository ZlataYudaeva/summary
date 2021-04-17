function startAnimation1() {
    for (let progress of $('.progress-bar')) {
        const timer = setInterval(() => {
            const computedStyle = getComputedStyle(progress)
            const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
            const dataStop = progress.dataset.end;
            progress.style.setProperty('--width', width + 0.25)
            
            if (width == dataStop) {
                clearInterval(timer)
            }
        }, 1)
    }
}

let index2 = 0;

function checkAnimation1() {
    const firstElement = document.querySelector('.barl')
    if (window.scrollY >= getCoords(firstElement).top * 0.85 && index2 !== 1) {
        index2 += 1
        startAnimation1()
    }
}

window.addEventListener('scroll', () => checkAnimation1())
window.removeEventListener('scroll', () => checkAnimation1())