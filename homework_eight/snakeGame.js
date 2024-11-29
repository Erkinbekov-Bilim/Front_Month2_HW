const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d"); // У него есть метод getContext  - му туда пишем в каком измеренни будет выполняться графика - мы передаем в 2д формате
const overlay= document.getElementById("overlay-hide");
const ground = new Image(); // Создает картинку в js
ground.src = "./img/ground.png";

const foodImg = new Image();
foodImg.src = "./img/food.png";

let box = 32;
let score = 0;

let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box,
}

let snake = [];

snake[0] = {
    x: 9 * box,
    y: 10 * box,
}

let dir;

const direction = (event) => {
    console.log(event);
    if (event.keyCode === 37 && dir !== 'right') dir = 'left';
    else if (event.keyCode === 38 && dir !== 'down') dir = 'up';
    else if (event.keyCode === 39 && dir !== 'left') dir = 'right';
    else if (event.keyCode === 40 && dir !== "up") dir = 'down';
}


document.addEventListener("keydown", direction);


const setModal = () => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");


    div.setAttribute("class", "modal");
    p.setAttribute("class", "score");
    button.setAttribute("class", "restart");

    button.textContent = "Restart";

    document.body.style = "rgba(0,0,0,0.5";
    document.body.appendChild(div);
    p.innerText += `Your score: ${score}`

    div.appendChild(p);
    div.appendChild(button);

    setTimeout(() => {
        document.body.classList.add("modal-open");
        overlay.setAttribute("id", "overlay-show")
        div.classList.add("show");
    }, 50);

    button.onclick = () => {
        restartGame()
        overlay.setAttribute("id", "overlay-hide");
    }

}

const restartGame = () => {
    score = 0
    dir = null
    snake = [{
        x: 9 * box,
        y: 10 * box,
    }]
    document.querySelector('.modal').remove();
    game = setInterval(drawGame, 100);
}

const eatTail = (head, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (head.x === arr[i].x && head.y === arr[i].y) {
            clearInterval(game)
            setModal()
        }
    }
}

const drawGame = () => {
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(foodImg, food.x, food.y);

    for(let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "green" : "red";
        ctx.fillRect(snake[i].x, snake[i].y, box , box) // fillReact - Можем создавать какой либо элемент rectangle
    }


    ctx.fillStyle = "white";
    ctx.font = '50px Arial';
    ctx.fillText(score, box * 2.5, box * 1.7)

    let snakeY = snake[0].y;
    let snakeX = snake[0].x;

    if (snakeX === food.x && snakeY === food.y) {
        score++
        food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box,
        }
    } else snake.pop();

    if (snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17) {
        clearInterval(game)
        setModal()
    }

    if (dir === 'left') snakeX -= box;
    if (dir === 'right') snakeX += box;
    if (dir === 'up') snakeY -= box;
    if (dir === 'down') snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY,
    }

    eatTail(newHead, snake);
    snake.unshift(newHead);

}

let game = setInterval(drawGame, 100);






