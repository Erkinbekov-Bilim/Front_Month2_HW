const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todoList = document.getElementById("todo_list");

const createTodo = () => {
    if (!input.value.trim()) return alert("напиши что нибудь");

    const div = document.createElement("div");
    const button_edit = document.createElement("button");
    const button_delete = document.createElement("button");
    const text = document.createElement("h3");
    div.setAttribute("class", "block_text");
    button_edit.setAttribute("class", "edit_button");
    button_delete.setAttribute("class", "delete_button");

    button_delete.textContent = "Delete";
    button_edit.textContent = "Edit";

    text.innerHTML = input.value;

    div.append(text);
    div.appendChild(button_edit);
    div.appendChild(button_delete);
    todoList.append(div);

    input.value = "";

    button_edit.onclick = () => {
        const edited_text = prompt("Редактирование текста")
        text.innerHTML = edited_text;
    }

    button_delete.onclick = () => div.style.display = "none"
};

createButton.onclick = () => createTodo();

// createButton.addEventListener("click", createTodo);

// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") createTodo();
// });

input.onkeydown = (e) => {
    if (e.key === "Enter") createTodo();
};
