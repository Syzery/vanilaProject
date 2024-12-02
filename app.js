const state = [
    {
        taskname: "study react1"
    },
    {
        taskname: "study react2"
    },
    {
        taskname: "study react3"
    },
    {
        taskname: "study react4"
    }
]

function taskCard(tasks){
    document.getElementById("toDoList").innerHTML = '';
    tasks.forEach((i, taskIndex) => {
        let card = document.createElement("div");
        let text = document.createElement("p");
        let buttonsContainer = document.createElement("div");
        let acceptButton = document.createElement("button");
        let delButton = document.createElement("button");
        text.innerText = i.taskname;
        acceptButton.innerText = "A";
        delButton.innerText = "D";
        card.setAttribute("class","taskCardContainer");
        text.setAttribute("class","taskText");
        buttonsContainer.setAttribute("class","buttonsContainer");
        acceptButton.setAttribute("class","interactiveButton");
        delButton.setAttribute("class","interactiveButton");
        acceptButton.setAttribute("id","accept");
        delButton.setAttribute("id","del");

        delButton.addEventListener("click", () => {
            removeTask(taskIndex);
        });

        buttonsContainer.appendChild(acceptButton);
        buttonsContainer.appendChild(delButton);
        card.appendChild(text);
        card.appendChild(buttonsContainer);
        document.getElementById("toDoList").appendChild(card);
    });
}

function removeTask(taskIndex) {
    state.splice(taskIndex, 1); // Удаляем задачу из массива
    taskCard(state); // Обновляем отображение
}

taskCard(state);

document.getElementById("taskInputButton").addEventListener("click", () => {
    let getInput = document.getElementById("taskInput").value;
    if (getInput.trim() !== '') {
        state.push({ taskname: getInput });
        taskCard(state);
        document.getElementById("taskInput").value = ''; // Очищаем поле ввода
    }
});


