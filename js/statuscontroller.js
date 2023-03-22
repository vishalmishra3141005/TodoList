let currentStatusContainer = document.getElementById("current-status-container");
let incompleteStatusContainer = document.getElementById("incomplete-status-container");
let completeStatusContainer = document.getElementById("complete-status-container");

let commonStatus = document.querySelectorAll(".common-status-container");

commonStatus.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        element.style.backgroundColor = "grey";
    });
    element.addEventListener("mouseout", function() {
        element.style.backgroundColor = "rgb(135, 135, 177)";
    });

    element.addEventListener("mousedown", function() {
        element.style.backgroundImage = "linear-gradient(red, rgb(0, 157, 255)"
    });
    element.addEventListener("mouseup", function() {
        element.style.backgroundImage = "";
    });
});

let defaultStatus = document.getElementById("current-status");
let completeStatus = document.getElementById("complete-status");
let incompleteStatus = document.getElementById("incomplete-status");

let completeText = completeStatus.innerText;
let incompleteText = incompleteStatus.innerText;

completeStatusContainer.addEventListener("click", function() {
    defaultStatus.innerText = completeText;
    poppulateCompleteList();
    updateCompleteCount();
});

incompleteStatusContainer.addEventListener("click", function() {
    defaultStatus.innerHTML = incompleteText;
    populateIncompleteList();
    updateIncompleteCount();
});

