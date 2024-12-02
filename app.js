const state = [
    { taskname: "study react1" },
    { taskname: "study react2" },
    { taskname: "study react3" },
    { taskname: "study react4" }
];

const doneState = [
    { taskname: "study react5" }
];

function taskCard(tasks) {
    document.getElementById("toDoList").innerHTML = '';
    document.getElementById("doCounter").innerHTML = state.length;
    tasks.forEach((task, taskIndex) => {
        let card = document.createElement("div");
        let text = document.createElement("p");
        let buttonsContainer = document.createElement("div");
        let acceptButton = document.createElement("button");
        let delButton = document.createElement("button");

        text.innerText = task.taskname;
        acceptButton.innerText = "A";
        delButton.innerText = "D";

        card.setAttribute("class", "taskCardContainer");
        text.setAttribute("class", "taskText");
        buttonsContainer.setAttribute("class", "buttonsContainer");
        acceptButton.setAttribute("class", "interactiveButton");
        delButton.setAttribute("class", "interactiveButton");

        // Уникальные идентификаторы для кнопок
        acceptButton.setAttribute("data-index", taskIndex);
        delButton.setAttribute("data-index", taskIndex);

        acceptButton.addEventListener("click", () => {
            acceptTask(taskIndex);
            createDoneTask();
        });
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

function createDoneTask() {
    document.getElementById("doneList").innerHTML = '';
    document.getElementById("doneCounter").innerHTML = doneState.length;
    doneState.forEach(task => {
        let card = document.createElement("div");
        let text = document.createElement("p");
        text.innerText = task.taskname;
        card.setAttribute("class", "taskCardContainer");
        text.setAttribute("class", "doneText");
        card.appendChild(text);
        document.getElementById("doneList").appendChild(card);
    });
}

function acceptTask(taskIndex) {
    // Удаляем задачу из состояния и добавляем в завершенные
    doneState.push(state[taskIndex]);
    state.splice(taskIndex, 1); // Удаляем задачу из массива 
    taskCard(state); // Обновляем отображение
}

function removeTask(taskIndex) {
    state.splice(taskIndex, 1); // Удаляем задачу из массива
    taskCard(state); // Обновляем отображение
}

taskCard(state);
createDoneTask();

document.getElementById("taskInputButton").addEventListener("click", () => {
    let getInput = document.getElementById("taskInput").value;
    if (getInput.trim() !== '') {
        state.push({ taskname: getInput });
        taskCard(state);
        document.getElementById("taskInput").value = ''; // Очищаем поле ввода
    }
});
