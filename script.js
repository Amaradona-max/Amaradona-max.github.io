// Riferimenti agli elementi HTML
const newTaskInput = document.getElementById('new-task-input');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');

// Funzione per creare una nuova <li> con il testo e gestore di evento
function createTaskElement(taskText, isDone = false) {
  const li = document.createElement('li');
  li.textContent = taskText;

  // Aggiungi comportamento al click: sposta tra Da Fare <-> Fatto
  li.addEventListener('click', () => {
    if (li.parentElement === todoList) {
      // Da Fare → Fatto
      todoList.removeChild(li);
      doneList.appendChild(li);
    } else {
      // Fatto → Da Fare
      doneList.removeChild(li);
      todoList.appendChild(li);
    }
  });

  return li;
}

// Gestione evento "Invio" sull'input
newTaskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
      const newTask = createTaskElement(taskText);
      todoList.appendChild(newTask); // Aggiungi alla sezione "Da Fare"
      newTaskInput.value = ''; // Pulisci il campo input
    }
  }
});
