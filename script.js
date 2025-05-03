let screenValue = "0"
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

const update = () => {
    document.getElementById("screen").innerText = screenValue
}