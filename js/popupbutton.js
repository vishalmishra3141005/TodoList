
function buttonComplete(nid) {
    let deleteComplete = document.getElementById("delete-complete");
    let cancelComplete = document.getElementById("cancel-complete");
    
    deleteComplete.addEventListener("click", function () {
        let gParent = deleteComplete.parentElement.parentElement;
        let id = gParent.firstElementChild.innerText;
        let gid = parseInt(id.substring(2));

        if (nid == gid) {
            for (let idx = 0; idx < todoListComplete.length; idx++) {
                console.log(todoListComplete);
                console.log(nid);
                if (todoListComplete[idx].id == nid) {
                    todoListComplete.splice(idx, 1);    
                    break;
                }
            }
            alert("Deleted");
            gParent.style.display = "none";
            poppulateCompleteList();
            updateCompleteCount();
        }

    });

    cancelComplete.addEventListener("click", function () {
        let gParent = cancelComplete.parentElement.parentElement;
        gParent.style.display = "none";
    });
}



function buttonIncomplete(nid) {
    let markComplete = document.getElementById("markc-incomplete");
    let deleteIncomplete = document.getElementById("delete-incomplete");
    let cancelIncomplete = document.getElementById("cancel-incomplete");

    markComplete.addEventListener("click", function () {
        let gParent = markComplete.parentElement.parentElement;
        let id = gParent.firstElementChild.innerText;
        let gid = parseInt(id.substring(2));

        if (gid == nid) {
            for (let idx = 0; idx < todoListIncomplete.length; idx++) {
                if (todoListIncomplete[idx].id == nid) {
                    todoListComplete.push({
                        id: nid,
                        title: todoListIncomplete[idx].title,
                        content: todoListIncomplete[idx].content,
                    });
                    todoListIncomplete.splice(idx, 1);
                    break;
                }
            }
            console.log(todoListComplete);
            console.log(todoListIncomplete);
            console.log(nid);
            alert("marked as complete");
            gParent.style.display = "none";
            populateIncompleteList();
            updateIncompleteCount();
        }
    });

    deleteIncomplete.addEventListener("click", function () {
        let gParent = deleteIncomplete.parentElement.parentElement;

        let id = gParent.firstElementChild.innerText;
        let gid = parseInt(id.substring(2));

        if (gid == nid) {
            for (let idx = 0; idx < todoListIncomplete.length; idx++) {
                if (todoListIncomplete[idx].id == nid) {
                    todoListIncomplete.splice(idx, 1);
                    break;
                }
            }
            alert("Deleted");
            gParent.style.display = "none";
            populateIncompleteList();
            updateIncompleteCount();
        }
    });

    cancelIncomplete.addEventListener("click", function () {
        let gParent = cancelIncomplete.parentElement.parentElement;
        gParent.style.display = "none";
    });
}
