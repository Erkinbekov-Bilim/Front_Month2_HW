const trafficLight = document.getElementById("traffic-light")



const traffic_light_types = {
    "RED": "stop",
    "YELLOW": "wait",
    "GREEN": "go"
}

const light = prompt("Введите цвет светофора (red, yellow, green)").toUpperCase()


const traffic_light = () => {
    Object.keys(traffic_light_types).forEach(traffic_light_type => {
        trafficLight.innerHTML += `
        <div class="light" id="light-${traffic_light_type}">
            <p class="type-light" id="type-light">${traffic_light_types[traffic_light_type]}</p>
        </div>
    `
    })

    const light_type = document.getElementById(`light-${light}`)

    switch (light){
        case "RED":
            light_type.style.background = "red"
            break
        case "YELLOW":
            light_type.style.background = "yellow"
            break
        case "GREEN":
            light_type.style.background = "green"
            break
        default:
            alert("Только три цвета red,yellow,green")
    }
}

traffic_light()