let emptyContainer = document.getElementById("empty-container");
let contentTemplateContainer = document.getElementById("content-template-container");


function populateIncompleteList() {
    if (todoListIncomplete.length != 0) {
        emptyContainer.style.display = "none";
        contentTemplateContainer.style.display = "flex";
        while (contentTemplateContainer.firstChild) {
            contentTemplateContainer.removeChild(contentTemplateContainer.lastChild);
        }
        for (let list of todoListIncomplete) {
            let newElement = document.createElement("div");;
            newElement.setAttribute("class", "content");
            

            let deleteIconContainer = document.createElement("div");
            deleteIconContainer.setAttribute("class", "delete-icon-container");
            deleteIconContainer.setAttribute("id", `t_${list.id}`);
            let deleteIcon = document.createElement("img");
            deleteIcon.setAttribute("src", "/assets/trash-solid.svg");
            deleteIcon.setAttribute("alt", "Detete");
            deleteIcon.setAttribute("class", "delete-icon");
            deleteIconContainer.appendChild(deleteIcon);


            let todoTitleContainer = document.createElement("div");
            todoTitleContainer.setAttribute("class", "todo-title-container");

            let titleContent = document.createElement("div");
            titleContent.setAttribute("class", "title-content");
            titleContent.innerText = list.title;

            todoTitleContainer.appendChild(titleContent);

            newElement.appendChild(deleteIconContainer);
            newElement.appendChild(todoTitleContainer);

            contentTemplateContainer.appendChild(newElement);
        }
        addDeleteIncomplete();
        addPopupIncomplete();
        updateIncompleteCount();
    } else {
        emptyContainer.style.display = "flex";
        contentTemplateContainer.style.display = "none";
    }
}

function poppulateCompleteList() {
    if (todoListComplete != 0) {
        emptyContainer.style.display = "none";
        contentTemplateContainer.style.display = "flex";
        while (contentTemplateContainer.firstChild) {
            contentTemplateContainer.removeChild(contentTemplateContainer.lastChild);
        }
        for (let list of todoListComplete) {
            let newElement = document.createElement("div");;
            newElement.setAttribute("class", "content");
            

            let deleteIconContainer = document.createElement("div");
            deleteIconContainer.setAttribute("class", "delete-icon-container");
            deleteIconContainer.setAttribute("id", `t_${list.id}`);

            let deleteIcon = document.createElement("img");
            deleteIcon.setAttribute("src", "/assets/trash-solid.svg");
            deleteIcon.setAttribute("alt", "Detete");
            deleteIcon.setAttribute("class", "delete-icon");
            deleteIconContainer.appendChild(deleteIcon);


            let todoTitleContainer = document.createElement("div");
            todoTitleContainer.setAttribute("class", "todo-title-container");

            let titleContent = document.createElement("div");
            titleContent.setAttribute("class", "title-content");
            titleContent.innerText = list.title;

            todoTitleContainer.appendChild(titleContent);

            newElement.appendChild(deleteIconContainer);
            newElement.appendChild(todoTitleContainer);

            contentTemplateContainer.appendChild(newElement);
        }
        addDeleteComplete();
        addPopupComplete();
        updateCompleteCount();
    } else {
        emptyContainer.style.display = "flex";
        contentTemplateContainer.style.display = "none";
    }
}