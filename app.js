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
    for (i of tasks){
        let card = document.createElement("div");
        let text = document.createElement("p");
        let buttonsContainer = document.createElement("div");
        let acceptButton = document.createElement("button");
        let delButton = document.createElement("button");
        text.innerText = i.taskname;
        card.setAttribute("class","taskCardContainer");
        text.setAttribute("class","taskText");
        buttonsContainer.setAttribute("class","buttonsContainer");
        acceptButton.setAttribute("class","acceptButton");
        delButton.setAttribute("class","delButton");
        card.setAttribute("id","taskCard");
        text.setAttribute("id","cardText");
        acceptButton.setAttribute("id","accept");
        delButton.setAttribute("id","del");
        buttonsContainer.appendChild(acceptButton);
        buttonsContainer.appendChild(delButton);
        card.appendChild(text);
        card.appendChild(buttonsContainer);
        document.getElementById("toDoList").appendChild(card);
    }
}

taskCard(state);