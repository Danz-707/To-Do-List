const input = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const toDo = document.querySelector(".to-do");

function addItem() {
	if (input.value.length === 0) {
		alert("Please Enter Something to add!");
		return;
	} else if (input.value.length >= 40) {
		alert("Maximum value of letters is 40!");
		return;
	}

	const div = document.createElement("div");
	const li = document.createElement("li");
	const button = document.createElement("button");
	const addedTime = new Date();

	li.innerHTML = input.value;
	button.innerHTML = "Remove";
	div.appendChild(li);
	div.appendChild(button);
	toDo.appendChild(div);

	input.value = "";

	button.addEventListener("click", () => {
		const currentTime = new Date();
		const elapsedTime = Math.floor(
			(currentTime - addedTime) / 1000
		);
		alert(
			`Congrats on finishing the task! It took you ${elapsedTime} seconds.`
		);
		div.remove();
	});
}

input.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		addItem();
	}
});

btn.addEventListener("click", addItem);
