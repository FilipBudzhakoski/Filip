onsole.log('Connected');

let person = {
    firstName: 'Bob',
    lastName: 'Bobski',
    age: 29
};

console.log(person);
console.log(person.firstName);

console.log('--- JSON ---')
let stingifiedPerson = JSON.stringify(person);
console.log(stingifiedPerson);
console.log(typeof stingifiedPerson);
console.log(stingifiedPerson.firstName);


let parsedPerson = JSON.parse(stingifiedPerson);
console.log(parsedPerson);
console.log(typeof parsedPerson);
console.log(parsedPerson.firstName);

const TODOS_URL = "https://gist.githubusercontent.com/dzocespd/2d9c12433efe52b91a3b426677027377/raw/8dd9c27cf42fe5a7641dc8c2a4757f2486baaeb6/todos.json";

function getTodosAJAX(){
    $.ajax({
        url: TODOS_URL,
       
        success: function(result){
           
            console.log("Success accessed external resource");

            console.log(result) 
            console.log(typeof result) 
            const parsedResult = JSON.parse(result);
            console.log(parsedResult) 
            let todos = parsedResult.todos
            console.log(todos)
            displayTodos(todos)
        },
        error: function (){
            console.error('ERROR HAPPENED')
                  }
    })
}

getTodosAJAX()
function addClass(element, className){
    element.classList.add(className)
};

function displayTodos(listOfTodos){
    const todoList = document.getElementById("todo-list");
    for(let i = 0; i < listOfTodos.length; i++){
        let todo = listOfTodos[i]
        console.log(todo)
        let listItem = document.createElement('li');
        addClass(listItem, 'todo-item')
        let todoText = document.createElement('span');
        if(todo.completed){
        addClass(listItem, 'completed')
        }
        let completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        
        addClass(completeButton, 'complete-btn')

        completeButton.onclick = function(){
          
            if(!todo.completed){
                todo.completed = true;
           
                addClass(listItem, 'completed')
            }else {
             
                completeButton.textContent = 'Undo'
                todo.completed = false
                listItem.classList.remove('completed')
            }
            
        }

        todoText.textContent = todo.title;
        listItem.appendChild(todoText)

        listItem.appendChild(completeButton)
        todoList.appendChild(listItem)
    }
}c