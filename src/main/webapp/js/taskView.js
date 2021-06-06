class TaskView{

    constructor(task){
        this.task = task;
        this.onDeleteFinished= null;
    }

    deleteTask = ()=>{
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange',()=>{
            if(xhr.readyState ==4){
                if(this.onDeleteFinished!=null){
                    this.onDeleteFinished();
                }
            }
        });
        xhr.open('DELETE','http://localhost:8081/MyTaskManager_war/api/tasks/delete/'+this.task.id);
        xhr.send();
    }
    render=()=>{
        let component = document.createElement('div');
        component.id = 'task'+this.task.id;
        component.className = 'taskComponent';
        let name = document.createElement('p');
        let description = document.createElement('p');
        let date = document.createElement('p');
        let delBtn = document.createElement('button');
        delBtn.className = 'delBtn';

        name.innerHTML =  this.task.name;
        description.innerHTML =  this.task.description;
        date.innerHTML =  this.task.date;


        component.appendChild(name);
        component.appendChild(description);
        component.appendChild(date);
        component.appendChild(delBtn);



        delBtn.addEventListener('click',this.deleteTask);
        return component;
    }


    
}