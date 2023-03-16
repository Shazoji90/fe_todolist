const todos = ["Belajar Javascript", "Belajar HTML"];

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button#add");
const editBtn = document.querySelector(".inputField button#edit");
const cancelBtn = document.querySelector(".inputField button#cancel");
const todoList = document.querySelector(".todoList");

function showTodos() {
  let newLiTag = "";
  todos.forEach((element, index) => {
    newLiTag += `
    <li>
      ${element}
      <span class="icon">
        <span class="icon-item edit" onclick="editTodo(${index})">
          <i class="fas fa-pen"></i>
        </span>
        <span class="icon-item delete" onclick="deleteTodo(${index})">
          <i class="fas fa-trash"></i>
        </span>
      </span>
    </li>`;
  });

  todoList.innerHTML = newLiTag;
}
// onkeyup event
inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value;
  if (userEnteredValue.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
};

addBtn.onclick = () => {
  let userEnteredValue = inputBox.value;
  todos.push(userEnteredValue);
  addBtn.classList.remove("active");
  inputBox.value = "";
  showTodos();
};

function editTodo(index) {
  editBtn.classList.remove("hide");
  cancelBtn.classList.remove("hide");
  addBtn.classList.add("hide");
  inputBox.value = todos[index];

  editBtn.onclick = () => {
    let userEnteredValue = inputBox.value;
    todos[index] = userEnteredValue;
    inputBox.value = "";
    editBtn.classList.add("hide");
    cancelBtn.classList.add("hide");
    addBtn.classList.remove("hide");
    addBtn.classList.remove("active");
    showTodos();
  };

  cancelBtn.onclick = () => {
    inputBox.value = "";
    editBtn.classList.add("hide");
    cancelBtn.classList.add("hide");
    addBtn.classList.remove("hide");
    addBtn.classList.remove("active");
  };
}

function deleteTodo(index) {
  todos.splice(index, 1);
  showTodos();
}

showTodos();
