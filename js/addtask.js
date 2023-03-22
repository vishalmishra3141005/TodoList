
let addTaskContainer = document.getElementById("add-task-container");
let modalContainer = document.getElementById("modal-container");

addTaskContainer.addEventListener("mouseover", function() {
    addTaskContainer.style.backgroundColor = "grey";
});

addTaskContainer.addEventListener("mouseout", function() {
    addTaskContainer.style.backgroundColor = "rgb(135, 135, 177)";
});

addTaskContainer.addEventListener("mousedown", function() {
    addTaskContainer.style.backgroundImage = "linear-gradient(red, rgb(0, 157, 255)";
});

addTaskContainer.addEventListener("mouseup", function() {
    addTaskContainer.style.backgroundImage = "";
});

addTaskContainer.addEventListener("click", function() {
    modalContainer.style.display = "flex";
});
