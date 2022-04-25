document.getElementById('formTask').addEventListener('submit', saveTask)

function saveTask(e) {
 let title = document.getElementById('title').value
 let description = document.getElementById('description').value
 let date = document.getElementById('date').value
 console.log(date)

 let task = {
  date,
  title,
  description,
 }

     // Getting Form Values
     const name = document.getElementById("name").value,
     price = document.getElementById("price").value,
     year = document.getElementById("year").value;

   // Create a new Oject Product
   const product = new Product(name, price, year);

   // Create a new UI instance
   const ui = new UI();

   // Input User Validation
   if (name === "" || price === "" || year === "") {
     ui.showMessage("Please Insert data in all fields", "danger");
     
 if (localStorage.getItem('tasks') === null) {
  let tasks = []
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
 } else {
  let tasks = JSON.parse(localStorage.getItem('tasks'))
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
 }

 getTasks()
 document.getElementById('formTask').reset()
 e.preventDefault()
}

function deleteTask(title) {
 console.log(title)
 let tasks = JSON.parse(localStorage.getItem('tasks'))
 for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].title == title) {
   tasks.splice(i, 1)
  }
 }

 localStorage.setItem('tasks', JSON.stringify(tasks))
 getTasks()
}

function getTasks() {
 let tasks = JSON.parse(localStorage.getItem('tasks'))
 let tasksView = document.getElementById('tasks')
 tasksView.innerHTML = ''
 for (let i = 0; i < tasks.length; i++) {
  let title = tasks[i].title
  let description = tasks[i].description
  let date = tasks[i].date

  tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body" style="background:black">
          <p style="color:white">${title} - ${description}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn ml-5" style="background:rgb(183, 0, 255);color:white">Borrar</a>
          </p>
          <div style="color:white">${date}</div>
        </div>
      </div>`
 }
}

getTasks()
