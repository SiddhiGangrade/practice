// const counter = document.querySelector("#counter")
// const btns = document.querySelectorAll(".btn")
const counter = document.getElementsByClassName("counter")[0]
const btns = document.getElementsByClassName("btn")
console.log(counter);
let a = new Array()
for (let i = 0; i < btns.length; i++) {
    a.push(btns[i])
}

console.log(a);

// const btn = document.querySelector(".btn.increase")
// const btnp = document.querySelector(".btn.reset")
// const btnk = document.querySelector(".btn.decrease")

// console.log(btn.increase);
// console.log(btn.reset);
// console.log(btn.decrease);

let count = 0;
a.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("increase")) {
            count++
        } else if (styles.contains("decrease")) {
            count--
        } else {
            count = 0
        }

        if (count > 0) {
            counter.style.color = "green"
        }
        if (count < 0) {
            counter.style.color = "red"
        }
        if (count === 0) {
            counter.style.color = "gray"
        }

        counter.textContent = count

    })
})