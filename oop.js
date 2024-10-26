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

  // (title, priority)
}


class ToDo {
    
}








// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}