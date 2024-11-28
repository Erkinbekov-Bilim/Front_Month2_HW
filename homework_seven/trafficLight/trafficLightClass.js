class TrafficLight {
    constructor(elementId) {
        this.trafficLightElement = document.getElementById(elementId);
        this.trafficLightTypes = {
            "RED": "stop",
            "YELLOW": "wait",
            "GREEN": "go"
        };
    }

    renderLights() {
        Object.keys(this.trafficLightTypes).forEach(trafficLightType => {
            this.trafficLightElement.innerHTML += `
                <div class="light" id="light-${trafficLightType}">
                    <p class="type-light">${this.trafficLightTypes[trafficLightType]}</p>
                </div>
            `;
        });
    }

    setLightColor(color) {
        const lightType = document.getElementById(`light-${color}`);

        switch (color) {
            case "RED":
                lightType.style.background = "red";
                break;
            case "YELLOW":
                lightType.style.background = "yellow";
                break;
            case "GREEN":
                lightType.style.background = "green";
                break;
            default:
                alert("Только три цвета: red, yellow, green");
        }
    }

    start() {
        this.renderLights();
        const light = prompt("Введите цвет светофора (red, yellow, green)").toUpperCase();
        this.setLightColor(light);
    }
}


const trafficLight = new TrafficLight("traffic-light");
trafficLight.start();