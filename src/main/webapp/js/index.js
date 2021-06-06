//Referencias
const names = document.getElementById('name');
const description = document.getElementById('description');
const newTaskButton = document.getElementById('newTaskButton');
const ToDoContainer = document.getElementById('ToDoContainer');
const DoingContainer = document.getElementById('DoingContainer');
const DoneContainer = document.getElementById('DoneContainer');


const add=()=>{
    let taskObj = {
    id:0,
    name: names.value,
    description: description.value,
    status:"TO DO"
    };

    //POST
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState==4){
            console.log(xhr.responseText);
             getAllToDoTasks();
             getAllDoingTasks();
             getAllDoneTasks();

        }
    });
    xhr.open('POST','http://localhost:8081/MyTaskManager_war/api/tasks/create');
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify(taskObj));
};


newTaskButton.addEventListener('click',add);

const getAllToDoTasks = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState==4){
            let json = xhr.responseText;
            let response = JSON.parse(json); 
            ToDoContainer.innerHTML = '';
            for(let i=0;i<response.length;i++){
                let taskP = response[i];
                let view = new  TaskView(taskP);
                view.onDeleteFinished = ()=>{
                   ToDoContainer.removeChild(document.getElementById('task'+taskP.id))
                }
                ToDoContainer.appendChild(view.render());
            }

        }
    });
    xhr.open('GET','http://localhost:8081/MyTaskManager_war/api/tasks/toDoTasks');
    xhr.send();
};


const getAllDoingTasks = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState==4){
            let json = xhr.responseText;
            let response = JSON.parse(json); 
            DoingContainer.innerHTML = '';
            for(let i=0;i<response.length;i++){
                let taskP = response[i];
                let view = new  TaskView(taskP);
                view.onDeleteFinished = ()=>{
                   DoingContainer.removeChild(document.getElementById('task'+taskP.id))
                }
                view.onUpdating = ()=>{                    
                    getAllToDoTasks();
                    getAllDoingTasks();
                    getAllDoneTasks();
                }
                DoingContainer.appendChild(view.render());
            }

        }
    });
    xhr.open('GET','http://localhost:8081/MyTaskManager_war/api/tasks/doingTasks');
    xhr.send();
};


const getAllDoneTasks = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState==4){
            let json = xhr.responseText;
            let response = JSON.parse(json); 
            DoneContainer.innerHTML = '';
            for(let i=0;i<response.length;i++){
                let taskP = response[i];
                let view = new  TaskView(taskP);
                
                view.onDeleteFinished = ()=>{
                    DoneContainer.removeChild(document.getElementById('task'+taskP.id))
                }
                DoneContainer.appendChild(view.render());
            }

        }
    });
    xhr.open('GET','http://localhost:8081/MyTaskManager_war/api/tasks/doneTasks');
    xhr.send();
};

getAllToDoTasks();
getAllDoingTasks();
getAllDoneTasks();




