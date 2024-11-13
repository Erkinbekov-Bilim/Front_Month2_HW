
const count = document.querySelector("#count")
const actions = document.querySelector("#actions")
const [increment,decrement] = [...actions.querySelectorAll("button")]

const counter = () => {
    let num = 0

    increment.addEventListener("click", () => {
        num++
        count.innerText = num
        count.style.color = "green"

    })


    decrement.addEventListener("click", () => {
        if (num > 0){
            num--
            count.innerText = num
            count.style.color = "red"
        }
    })
}

counter()

