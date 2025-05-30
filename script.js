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

//todo: fix mouseover/out
document.getElementById("square").addEventListener("mouseover", (e) => {
    document.getElementById("square").style.display = "none"
    document.getElementById("cross-square").style.display= "block"
})

document.getElementById("square").addEventListener("mouseout", (e) => {
    document.getElementById("square").style.display = "block"
    document.getElementById("cross-square").style.display= "none"
})

document.getElementById("clearButton").addEventListener("click", (e) => {
    screenValue = "0"
    action = ""
    a = 0
    b = 0
    update()
})
document.getElementById("delButton").addEventListener("click", (e) => {
    screenValue = screenValue.slice(0, -1)
    if (screenValue === "") {
        screenValue = "0"
    }
    update()
})

// todo: -2 * 4 = NaN
//todo: -8 / -8 = NaN
document.getElementById("reverse").addEventListener("click", (e) => {
    if (action === "") {
        if (Number(screenValue) >= 0) {
            screenValue = (-Number(screenValue)).toString()

        } else {
            screenValue = Math.abs(Number(screenValue)) + ""
        }
    } else {
        let screenValueTmp = screenValue.replace("×", "*")
        console.log(screenValueTmp)
        screenValueTmp = screenValueTmp.replace("÷", "/")
        const index = regexIndexOf(screenValueTmp, /[-+*/]/)
        let tmp_b = screenValueTmp.slice(index + 1)
        console.log(tmp_b)
        tmp_b = tmp_b.replace("(", "").replace(")", "")
        tmp_b = +tmp_b
        if (tmp_b >= 0) {
            screenValue = screenValue.slice(0, index + 1) + "(" + (-tmp_b) + ")"
        } else {
            screenValue = screenValue.slice(0, index + 1) + Math.abs(tmp_b)
        }
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
        if (action !== "") {
            return
        }
        action = e.target.textContent
        a = +screenValue
        screenValue += action
        update()
    })
}

document.getElementById("equal").addEventListener("click", (e) => {
    let screenValueTmp = screenValue.replace("×", "*")
    screenValueTmp = screenValueTmp.replace("÷", "/")
    const index = regexIndexOf(screenValueTmp, /[-+*/]/) ///todo: добавить остальные знаки
    console.log(index)
    b = screenValueTmp.slice(index + 1)
    b = +(b.replace("(", "").replace(")", ""))
    if (action === "+") {
        screenValue = a + b + ""
    } else if (action === "-") {
        screenValue = a - b + ""
    } else if (action === "×") {
        screenValue = a * b + ""
    }
    else if (action === "÷") {
        screenValue = a / b + ""
    }
    const c = eval(a + (action === "×" ? "*" : action === "÷" ? "/" : action) + b)
    console.log(`${a} ${action} ${b} = ${c}`)
    //todo: db update
    update()
})

const update = () => {
    document.getElementById("screen").innerText = screenValue
    if (screenValue === "0") {
        document.querySelector("#clearButton").style.display = "inline-block"
        document.querySelector("#delButton").style.display = "none"
    } else {
        document.querySelector("#clearButton").style.display = "none"
        document.querySelector("#delButton").style.display = "inline-block"
    }
}

//Tools
// https://stackoverflow.com/questions/273789/javascript-string-indexof-allowing-regular-expressions
function regexIndexOf(string, regex) {
    const startpos = 1
    const indexOf = string.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}
