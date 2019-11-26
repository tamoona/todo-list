"use strict";
var formElement = document.querySelector(".form");
var listElement = document.querySelector(".todos");

var addToList = function(text) {
  var itemElement = document.createElement("li");
  itemElement.textContent = text;
  listElement.append(itemElement);
};

formElement.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var todoText = document.querySelector(".input-todo").value;
  addToList(todoText);
});
