"use strict";

const todoContainer = document.querySelector(".todo-container");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".input");
const addBtn = document.querySelector(".add-btn");
const todoEl = document.querySelector(".todos");
// console.log(todoContainer, todoForm, todoInput, addBtn, todoEl);
todoInput.focus();

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const userInput = todoInput.value;
  if (!userInput) return; //guardclause: if the there's no user input do not add task
  const listEl = document.createElement("li");
  const spanText = document.createElement("span");
  listEl.appendChild(spanText);
  listEl.classList.add("list");
  spanText.textContent = userInput;
  todoEl.appendChild(listEl);
  todoInput.value = "";

  // creating a delete button inside the list element
  const btnCont = document.createElement("div");
  const delBtn = document.createElement("input");
  delBtn.type = "submit";
  delBtn.value = "Delete";
  delBtn.classList.add("delete-btn");
  btnCont.classList.add("btn-cont");
  btnCont.appendChild(delBtn);
  listEl.appendChild(btnCont);
  //   console.log(listEl);

  // deleting the list
  delBtn.addEventListener("click", () => {
    todoEl.removeChild(listEl);
  });

  // i want user to be able to edit list by clicking on the list
  spanText.addEventListener("click", () => {
    // creating  a form that enables user to click on the list to edit the content
    if (todoEl.classList.contains("active")) return;
    const editForm = document.createElement("form");
    const editInput = document.createElement("input");
    const editSubmit = document.createElement("input");

    editForm.classList.add("todo-form");
    editInput.classList.add("todo-input");
    editInput.type = "text";
    editSubmit.classList.add("add-btn");
    editSubmit.type = "submit";
    editSubmit.value = "Edit";

    editForm.appendChild(editInput);
    editForm.appendChild(editSubmit);
    todoContainer.appendChild(editForm);
    todoForm.classList.add("hidden");
    editInput.focus();
    editInput.value = spanText.textContent;
    todoEl.classList.add("active");

    // edit button
    editSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      spanText.textContent = editInput.value;
      todoContainer.removeChild(editForm);
      todoForm.classList.remove("hidden");
      todoEl.classList.remove("active");
    });
  });
});

document.addEventListener("keydown", (e) => {
  //   console.log(e);
  if (e.key === " ") {
    todoInput.focus();
  }
});
