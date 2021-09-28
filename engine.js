// these id is based on what you name the category list container, and task list container
//  that will insert the category item component

function renderCategories(categories, id) {
  document.getElementById(id).innerHTML = categories
    .map(categoryItemComponent)
    .join("");
}
function renderTasks(tasks, id) {
  document.getElementById(id).innerHTML = tasks
    .map(tasksItemComponent)
    .join("");
}

function getSelectedCategoryById(id) {
  return document.getElementById(id).value;
}

function getFilteredDone() {
  return document.getElementById("done").checked;
}

function getNewTaskText() {
  return document.getElementById("new-task").value;
}
