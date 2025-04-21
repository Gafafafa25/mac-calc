let screenValue = 0
const digits  = document.getElementsByClassName("digit")
for (const btn of digits) {
    btn.addEventListener("click", () => {
        console.log(this)
    })
}
console.log(digits)