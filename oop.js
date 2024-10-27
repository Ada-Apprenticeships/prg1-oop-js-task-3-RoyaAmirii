PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };


function validInteger (value) { // value can be a string or a number (integer)
  return Number.isInteger(Number(value)) && Number (value) > 0;
}  


function validatePriority(priority) { // value can be a string or a number (integer)
  const priorityValue = Number(priority);
  return[1,3,5,7].includes(priorityValue) ? priorityValue : PRIORITY["LOW"]
}


function todaysDate () {
  const now = new Date ();
  const day = String(now.getDate()).padStart(2,'0');
  const month = String(now.getMonth() + 1).padStart(2,'0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2,'0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  
}


class Task  {
  #title; // Private attribute
  #priority; // Private attribute
  #added; // Private attribute

  constructor(title, priority) {
    this.#title = title;
    this.#priority = validatePriority(priority);
    this.#added = todaysDate();
  }
    get title() {
      return this.#title;
}
get priority () {
  return this.#priority;
}
set priority (newPriority) {
  this.#priority = validatePriority(newPriority);
}

get added() {
  return this.#added;
}
}
class ToDo {
  constructor() {
    this.tasks = []; // Array to hold Task objects
}

add(task){
  if (task instanceof Task) {
  this.tasks.push(task);
  return this.tasks.length;
  } else {
    throw new Error ('Invalid Task instance');
  }
}
remove(title){
  const taskIndex = this.tasks.findIndex(task => task.title === title);
  if (taskIndex !== -1){
    this.task.splice(taskIndex, 1);
    return true;
  }
  return false;
  
}
list(priority = 0) {
  return this.tasks
    .filter(task => priority === 0 || task.priority === priority)
    .map(task => [task.added, task.title, task.priority]);
}
task(title) {
  const task = this.tasks.find(task => task.title === title);
  if (!task) {
    throw new Error(`Task '${title}' Not Found`);
  }
  return task;
}
}

// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}