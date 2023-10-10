//#region DOM Elements
const todosUL = document.getElementById("todosUL");
const searchForm = document.getElementById("searchForm");
const searchText = document.getElementById("searchText");
const addForm = document.getElementById("addForm");
const addText = document.getElementById("addText");

//#endregion

//#region Initial Data Source
let todosList = ["Play Tennis", "Deliver JS Assignment", "Learn New Techs"];

let todosArray = ["Play Tennis", "Deliver JS Assignment", "Learn New Techs"];
//#endregion

//#region AddTodo
const createTodoLI = (todo) => `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;
//#endregion

//#region BindTodosToDom
// دي بتستقبل ليستة و بتعيد رسمها في الصفحة
const BindTodosToDom = (todos) => {
  todosUL.innerHTML = todos.map(createTodoLI).join("");
};
//#endregion

//#region Search Todos
const searchTodos = (todoSearchText, list) => {
  let FilteredTodos = list.filter((todo) => todo.includes(todoSearchText));
  BindTodosToDom(FilteredTodos);
};
//#endregion

//#region Add Todos
const addTodos = (todoAddText) => {
  todosList.push(todoAddText);
  BindTodosToDom(todosList);
};
//#endregion

BindTodosToDom(todosList);

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchedText = searchText.value;
  searchTodos(searchedText, todosList);
});

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let AddedText = addText.value;
  addTodos(AddedText);
});

