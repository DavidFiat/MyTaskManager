//Referencias
const names = document.getElementById('name');
const description = document.getElementById('facultad');
const newTaskButton = document.getElementById('newTaskButton');

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
    xhr.open('POST','/api/tasks/create');
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify(taskObj));
};


newTaskButton.addEventListener('click',add);

const getAllTasks = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState==4){
            let json = xhr.responseText;
            let response = JSON.parse(json); 
            console.log(response);
            ToDoContainer.innerHTML = '';
            for(let i=0;i<response.length;i++){
                let taskP = response[i];
                let view = new TaskView(taskP);
                view.onDeleteFinished = ()=>{
                    ToDoContainer.removeChild(document.getElementById('task'+tastP.id))
                }
                ToDoContainer.appendChild(view.render());
            }

            DoingContainer.innerHTML = '';
            for(let i=0;i<response.length;i++){
                let taskP = response[i];
                let view = new TaskView(taskP);
                view.onDeleteFinished = ()=>{
                    DoingContainer.removeChild(document.getElementById('task'+tastP.id))
                }
                DoingContainer.appendChild(view.render());
            }

            DoneContainer.innerHTML = '';
            for(let i=0;i<response.length;i++){
                let taskP = response[i];
                let view = new TaskView(taskP);
                view.onDeleteFinished = ()=>{
                    DoneContainer.removeChild(document.getElementById('task'+tastP.id))
                }
                DoneContainer.appendChild(view.render());
            }



        }
    });
    xhr.open('GET','/api/tasks/all');
    xhr.send();
};

getAllTasks();




