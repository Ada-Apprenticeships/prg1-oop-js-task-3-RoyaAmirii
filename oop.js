PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };

//validate if a value is a non negative integer
function validInteger (value) { // value can be a string or a number (integer)
  return Number.isInteger(parseInt(value)) && String(parseInt (value)) === String (value) && Number(value) >= 0;
}  

//validate priority level
function validatePriority(priority) { // value can be a string or a number (integer)
  const priorityValue = Number(priority);
  return[1,3,5,7].includes(priorityValue) ? priorityValue : PRIORITY["LOW"]//return valid priority or default to LOW
}

// Get the current date and time formatted as DD/MM/YYYY HH:MM:SS
function todaysDate () {
  const now = new Date ();
  const day = String(now.getDate()).padStart(2,'0');
  const month = String(now.getMonth() + 1).padStart(2,'0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2,'0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`; //return formatted data string
  
}

// Task class representing a single task
class Task  {
  _title; // removed the # to change private attribute to public
  _priority; //  removed the # to change private attribute to public
  _added; //  removed the # to change private attribute to public

  constructor(title, priority) {
    this._title = title;
    this._priority = validatePriority(priority);
    this._added = todaysDate();
  }
    get title() {
      return this._title;
}
get priority () {
  return this._priority;
}
set priority (newPriority) {
  this._priority = validatePriority(newPriority);
}

get added() {
  return this._added;
}
}
// ToDo class representing a collection of tasks
class ToDo {
  constructor() {
    this.tasks = []; // Array to hold Task objects
}

add(task){
  if (task instanceof Task) {// Check if the input is a valid Task instance
  this.tasks.push(task);  // Add the task to the array
  return this.tasks.length;
  } else {
    throw new Error ('Invalid Task instance');
  }
}
remove(title){ // Remove a task by its title
  const taskIndex = this.tasks.findIndex(task => task.title === title); // Find index of the task
  if (taskIndex !== -1){
    this.tasks.splice(taskIndex, 1);
    return true;
  }
  return false; // Return false if task not found
  
}
  // List tasks, filtered by priority
list(priority = 0) {
  return this.tasks
    .filter(task => priority === 0 || task.priority === priority) // Filter tasks based on priority
    .map(task => [task.added, task.title, task.priority]); // Map to desired output format
  }

// Find and return a task by its title
task(title) {
  const task = this.tasks.find(task => task.title === title); // Search for the task
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