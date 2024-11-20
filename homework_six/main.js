const input = document.getElementById("input");
const p_reversed = document.getElementById("reversed_text");
const container_text = document.getElementById("container_text");


const reverse_text = () => {
    if (input.value) {
        let reversed_text = input.value.split("").reverse().join("");
        p_reversed.innerText = reversed_text;
    }
}
const outputStrings = () => {
    const list_strings = [];
    list_strings.push(input.value);
    console.log(list_strings);

    if (!input.value.trim()) {
        alert("Input is empty!");
    } else {
        list_strings.forEach((text) => {
            const p_text_list = document.createElement("p");
            p_text_list.setAttribute("id", "text_list");
            container_text.appendChild(p_text_list);

            p_text_list.innerHTML = text;
        })
    }
}


input.onkeydown = (e) => {
    if (e.key === "Enter") {
        reverse_text();
        outputStrings();
        input.value = "";
    }
};