
let modalTitle = document.getElementById("modal-title");
let modalContent = document.getElementById("modal-content");

let modalSave = document.getElementById("save-button");
let modalCancel = document.getElementById("cancel-button");


modalSave.addEventListener("click", function() {
    if (modalTitle.value == '')
        alert("Fill the title of todoList");
    else if (modalContent.value == '')
        alert("Fill the content of todoList"); 
    else {
        lastIndex++;
        todoListIncomplete.push({
            id: lastIndex,
            title: modalTitle.value,
            content: modalContent.value,
        });
        alert("Saved");
        cleanup();
        populateIncompleteList();
        updateIncompleteCount();
    }
    
});

modalCancel.addEventListener("click", cleanup);

function cleanup() {
    modalContainer.style.display = "none";
    modalTitle.value = '';
    modalContent.value = '';
}