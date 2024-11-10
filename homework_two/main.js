let numbers = [10,20,30,50,235,3000]


for (const number of numbers) {
    let str_num = String(number)
    let char_num = str_num[0]

    if (char_num === "1" || char_num === "2" || char_num === "5"){
        console.log(str_num)
    }
}

for (let i = 20; i >= 0; i--) {
    console.log(i)
}


const traffic_light_obj = {
    "red": "красный",
    "yellow": "желтый",
    "green": "зеленый"
}

let traffic_light = prompt("Введите один цвет светофора").toLowerCase()

switch (traffic_light) {
    case traffic_light_obj.red: alert("Стоп")
        break
    case traffic_light_obj.yellow: alert("Жди")
        break
    case traffic_light_obj.green: alert("Можешь идти")
        break
    default:
        alert(`Введите только те цвета которые есть в цветофорах. Это ${traffic_light_obj.red}, ${traffic_light_obj.yellow}, ${traffic_light_obj.green}`)
}