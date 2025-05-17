let screenValue = "0"
let action = "", a, b
const digits = document.getElementsByClassName("digit")
for (const btn of digits) {
    btn.addEventListener("click", (e) => {
        const d = e.target.textContent
        if (document.getElementById("screen").innerText === "0") {
            screenValue = d
        } else {
            screenValue += d
        }
        update()
    })
}

document.getElementById("clearButton").addEventListener("click", (e) => {
    screenValue = "0"
    update()
})

document.getElementById("reverse").addEventListener("click", (e) => {
    if (Number(screenValue) >= 0) {
        screenValue = (-Number(screenValue)).toString()
    } else {
        screenValue = Math.abs(Number(screenValue)) + ""
    }
    update()
})

document.getElementById("comma").addEventListener("click", (e) => {
    if (screenValue[screenValue.length - 1] !== ".") {
        screenValue += "."
        update()
    }
})
document.getElementById("percent").addEventListener("click", (e) => {
    screenValue += "%"
    update()
})
const btnActions = document.getElementsByClassName("action")
for (const btn of btnActions) {
    btn.addEventListener("click", (e) => {
        action = e.target.textContent
        a = +screenValue
        screenValue += action
        update()
    })
}

document.getElementById("equal").addEventListener("click", (e) => {
    const index = regexIndexOf(screenValue, /[+]/) ///todo: добавить остальные знаки
    b = +screenValue.slice(index + 1)
    if (b > 0 && index > -1 && index < screenValue.length) {
        screenValue = a + b + ""
    }
    update()
})

const update = () => {
    document.getElementById("screen").innerText = screenValue
}

//Tools
// https://stackoverflow.com/questions/273789/javascript-string-indexof-allowing-regular-expressions
function regexIndexOf(string, regex) {
    const startpos = 0
    const indexOf = string.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}
