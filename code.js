let todos = [
  "Take Jim to the hair salon",
  "Drop off wedding invitation at mailbox",
  "Pick up the cake",
  "Call the caterers",
  "Schedule the flower delivery",
  "Dry Clean the Suits"
];

function renderTodoApp() {
  // Follow the instructions on my.kenzie.academy to complete the assignment.
  // Your Code Here

  let app = document.getElementById('app');
  
  let headingThreeEl = document.createElement('h3');
  headingThreeEl.innerHTML = "Todo List";
  document.body.append(headingThreeEl);

  let ulElement = document.createElement('ul');
  document.body.append(ulElement);

  for (let index = 0; index < todos.length; index++) {
    document.write(`<li> ${todos[index]} </li>`);
    
  }



 
}

renderTodoApp();
