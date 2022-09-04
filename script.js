"use strict";

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I’m red!";
paragraph.style.color = "red";
container.appendChild(paragraph);

const heading = document.createElement("h3");
heading.classList.add("heading");
heading.textContent = "I’m a blue h3!";
heading.style.color = "blue";
container.appendChild(heading);

const parentDiv = document.createElement("div");
parentDiv.classList.add("parentDiv");
parentDiv.textContent = "I’m the parent div!";
parentDiv.style.color = "black";
parentDiv.style.backgroundColor = "pink";
parentDiv.style.border = "solid black";

const childHeading = document.createElement("h1");
parentDiv.classList.add("childHeading");
childHeading.textContent = "I'm in a div";
parentDiv.appendChild(childHeading);

const childParagraph = document.createElement("p");
parentDiv.classList.add("childParagraph");
childParagraph.textContent = "I'm in a div too!";
parentDiv.appendChild(childParagraph);

container.appendChild(parentDiv);
