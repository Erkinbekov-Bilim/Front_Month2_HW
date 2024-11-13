const block = document.querySelector("#block")
const mouse_coordinate = document.querySelector("#mouse-coordinate")
const [x_coordinate,y_coordinate] = [...mouse_coordinate.querySelectorAll("p")]
block.addEventListener("mousemove", (event) => {
    let x = event.pageX,
        y = event.pageY;

    x_coordinate.innerHTML = `x: ${x}`
    y_coordinate.innerHTML = `y: ${y}`
    console.log(event)
})

block.addEventListener("mouseleave", () => {
    x_coordinate.innerHTML = `x: 0`;
    y_coordinate.innerHTML = `y: 0`;
});