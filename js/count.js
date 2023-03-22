let count = document.getElementById("count");

function updateCompleteCount() {
    count.innerText = todoListComplete.length;
}

function updateIncompleteCount() {
    count.innerText = todoListIncomplete.length;
}