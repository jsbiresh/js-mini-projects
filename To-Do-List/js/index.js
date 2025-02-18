const addItemButton = document.getElementById("add-item-button");
const addItemInputBox = document.getElementById("input-box");

const refreshListButton = document.getElementById("refresh-list");

// display length
const displayLength = document.getElementById("length-display");

// display ul li
const listContainer = document.getElementById("display-ul");

// ======================================================================

// Fetch to do list from localStorage
function getToDoList() {
  let storedList = localStorage.getItem("to-do-list");
  return storedList ? JSON.parse(storedList) : [];
}

document.addEventListener("DOMContentLoaded", refreshList);

// Fetch and count List items
function refreshList() {
  let toDoList = getToDoList();
  if (toDoList.length === 0) {
    displayLength.textContent = `0 Items`;
    return;
  }
  if (toDoList.length === 1) {
    displayLength.textContent = `${toDoList.length} Item`;
    return;
  }
  displayLength.textContent = `${toDoList.length} Items`;
  return;
}
displayItems();

// Add button click
addItemButton.addEventListener("click", function (event) {
  let toDoList = getToDoList();
  // capture data from input box
  let inputValue = addItemInputBox.value;

  if (inputValue.trim() === "") {
    // only display non-empty input

    return;
  }
  toDoList.push(inputValue.trim());
  localStorage.setItem("to-do-list", JSON.stringify(toDoList));
  addItemInputBox.value = "";
  refreshList();
  displayItems();
  addItemInputBox.focus();
});

// display items on the page
function displayItems() {
  let toDoList = getToDoList();
  // clear the ul element to avoid repetition of li
  listContainer.innerHTML = "";
  if (toDoList.length === 0) {
    listContainer.innerHTML = `<li>No Items Found! Please add some. </li>`;
    return;
  }

  // iterate over the to-do list and append li to the listContainer (ul)
  toDoList.forEach((item, index) => {
    let li = document.createElement("li");
    let hr = document.createElement("hr");

    // create delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("edit-delete-holder");

    // create edit button
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-delete-holder");

    // create span for item name
    let itemName = document.createElement("span");
    itemName.textContent = `${index + 1}. ${item}`;

    // create a container for buttons
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    // append the edit and delete buttons to the button container
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    // append name and button container to li
    li.appendChild(itemName);
    li.appendChild(buttonContainer);

    listContainer.appendChild(li);
    listContainer.appendChild(hr);

    // add event listener for the delete button, helpful for retrieving the id or the index for deletion
    deleteButton.addEventListener("click", function () {
      let confirmation = confirm(
        "Are you sure, the task is complete and you want to delete it?"
      );
      if (confirmation) {
        deleteToDoItem(index); // invoke method for deletion
      }
    });
    // add event listener for the edit button, helpful for retrieving the id or the index for edits
    editButton.addEventListener("click", function () {
      let confirmation = confirm(`Are you sure you want to Edit ${item}`);

      if (confirmation) {
        let newItem = prompt("Edit the task: ", item);
        if (newItem !== null && newItem.trim() !== "") {
          editToDoItem(index, newItem);
        }
      }
    });
  });
}

// edit an item from the to do list dynamically
function editToDoItem(index, newItem) {
  let todolist = getToDoList();
  todolist[index] = newItem; // replace the item with the help of the index
  localStorage.setItem("to-do-list", JSON.stringify(todolist));
  displayItems();
}

// delete an item from the to do list dynamically
function deleteToDoItem(index) {
  let todolist = getToDoList();
  todolist.splice(index, 1);
  localStorage.setItem("to-do-list", JSON.stringify(todolist));
  displayItems();
  refreshList();
  return;
}

// // Update the localStorage with the new to-do list
// function updateLocalStorage(toDoList) {
//   localStorage.setItem("to-do-list", JSON.stringify(toDoList));
//   displayItems(); // Refresh the list display
// }
