
function addDeleteIncomplete() {
    let elements = document.querySelectorAll(".delete-icon-container");
    for (let element of elements) {
        element.addEventListener("click", function() {
            let id = element.id.substring(2);
            let nid = parseInt(id);
            for (let idx = 0; idx < todoListIncomplete.length; idx++) {
                if (todoListIncomplete[idx].id == nid) {
                    todoListIncomplete.splice(idx, 1);
                    break;
                }
            }
            populateIncompleteList();
            updateIncompleteCount();
        });
    }
}

function addDeleteComplete() {
    let elements = document.querySelectorAll(".delete-icon-container");
    for (let element of elements) {
        element.addEventListener("click", function() {
            let id = element.id.substring(2);
            console.log(element);
            console.log("Clicked");
            console.log(id);
            let nid = parseInt(id);
            console.log(nid);
            for (let idx = 0; idx < todoListComplete.length; idx++) {
                if (todoListComplete[idx].id == nid) {
                    todoListComplete.splice(idx, 1);
                    console.log(nid);
                    break;
                }
            }
            poppulateCompleteList();
            updateCompleteCount();
        });
    }
}