// 通过 document.getElementById 方法获取 HTML 页面中对应的元素
const taskInput = document.getElementById('taskInput');  //taskInput：用于输入新任务的输入框。
const addBtn = document.getElementById('addBtn');        //addBtn：添加任务的按钮。
const taskList = document.getElementById('taskList');
const statusElement = document.getElementById('status'); //statusElement：显示当前任务总数的元素。
const sortByNameBtn = document.getElementById('sortByName');  //sortByNameBtn：按任务名称排序的按钮。
const sortByDateBtn = document.getElementById('sortByDate');  //sortByDateBtn：按任务创建日期排序的按钮。
let tasks = [
    {
        text:"ffff4",createdAt: new Date(2025,1,14),
    }, {
        text:"7767764",createdAt: new Date(2025,1, 16),
    }
];
function update() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;

    const dateSpan = document.createElement('span');
    dateSpan.className = 'task-date';
    dateSpan.textContent = "(" + task.createdAt.toLocaleDateString() + ")";

    li.appendChild(span);
    li.appendChild(dateSpan);

    taskList.appendChild(li);
  })

  statusElement.innerHTML = `当前总任务数： ${tasks.length} `;

}

function addTask() {
  if(!taskInput.value) {
    alert('Please enter a task');
    return;
  }
  const newtask = {
    text: taskInput.value,
    createdAt: new Date(),
  };
  tasks.push(newtask);
  taskInput.value = '';
  update()
}
  addBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress',(event) => {
    if(event.key === 'Enter') {
      addTask();
    }
  })

  function sortTaskByName() {
    tasks.sort((a,b) => a.text.localeCompare(b.text));
    update();
  }

  function sortTaskByDate() {
    tasks.sort((a,b) => a.createdAt - b.createdAt);
    update();
  }

  sortByNameBtn.addEventListener('click', sortTaskByName);
  sortByDateBtn.addEventListener('click', sortTaskByDate);
  update();
