let screenValue = 0
const digits  = document.getElementsByClassName("digit")
for (const btn of digits) {
    btn.addEventListener("click", (e) => {
        console.log(e.target.textContent)
    })
}
console.log(digits)