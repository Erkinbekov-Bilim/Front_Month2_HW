const find_the_minimum_number = (num_one, num_two) => {
    if (num_one > num_two){
        console.log(num_two)
    }else{
        console.log(num_one)
    }
}


find_the_minimum_number(0, 1)


let word = prompt("Введите слово")
const line_length = (word) => {
    console.log(word.length)
}

line_length(word)


const calculator = (num_one, num_two, operator) => {
    if (operator === "/") {
        if (num_two === 0) {
            console.log("На ноль делать нельзя")
        } else {
            return num_one / num_two
        }
    }
    else if (operator === "*") {
        return num_one * num_two
    }
    else if (operator === "+") {
        return num_one + num_two
    }
    else if (operator === "-") {
        return  num_one - num_two
    }
    else {
        console.log("Неверная операция")
    }
}

console.log(calculator(2,6, "*"))