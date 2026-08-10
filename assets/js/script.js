let container = document.querySelector('.container');
let listTasks = [];

function createTask() {
    let task = document.querySelector('#task').value;
    if (task.trim() === "") {
        alert("Digite uma tarefa");
        return;
    }else if(listTasks.find(el => el.name === task)){
        alert("Essa tarefa já existe");
        return;
    }

    const novaTask = new Task(task);

    listTasks.push(novaTask);
    refresh()
}

function alterTask(id){
    const task = listTasks.find(el => el.id === id);

    if(task){
        task.alterConclusion();
        refresh();
    }
}

function excluir(id){
    listTasks = listTasks.filter(el => el.id !== id);
    refresh();
}

function refresh() {
    container.innerHTML = '';
    listTasks.forEach(el => {
        container.innerHTML += `<div class="taskBox">
            <h2>${el.name}</h2>
            <button onclick="alterTask(${el.id})">${el.completed ? 'Desfazer' : 'Complete'}</button>
            <button onclick="excluir(${el.id})">Excluir</button>
        </div>`;
    });
}



