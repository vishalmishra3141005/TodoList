
function addPopupIncomplete() {
    let elements = document.querySelectorAll(".content");
    for (let element of elements) {
        let child = element.children[1];
        child.addEventListener("click", function() {
            let fc = element.firstElementChild;
            let nid = parseInt(fc.id.substring(2));
            let e = document.getElementById("display-incomplete");
            e.style.display = "flex";

            let dtitle = '';
            let dcontent = '';

            for (let list of todoListIncomplete) {
                if (list.id == nid) {
                    dtitle = list.title;
                    dcontent = list.content;
                    break;
                }
            }

            let tid = document.getElementById("incomplete-task-id");
            tid.innerHTML = fc.id;
            let title = document.getElementById("display-incomplete-title");
            title.value = dtitle;
            let content = document.getElementById("display-incomplete-content");
            content.value = dcontent;
            buttonIncomplete(nid);
        });
    }
}

function addPopupComplete() {
    let elements = document.querySelectorAll(".content");
    for (let element of elements) {
        let child = element.children[1];
        child.addEventListener("click", function() {
            let fc = element.firstElementChild;
            let nid = parseInt(fc.id.substring(2));
            console.log(todoListComplete);
            let e = document.getElementById("display-complete");
            e.style.display = "flex";

            let dtitle = '';
            let dcontent = '';

            for (let list of todoListComplete) {
                if (list.id == nid) {
                    dtitle = list.title;
                    dcontent = list.content;
                    break;
                }
            }

            let tid = document.getElementById("complete-task-id");
            tid.innerHTML = fc.id;
            let title = document.getElementById("display-complete-title");
            title.value = dtitle;
            let content = document.getElementById("display-complete-content");
            content.value = dcontent;
            buttonComplete(nid);
        });
    }
}