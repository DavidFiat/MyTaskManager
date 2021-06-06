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
        name.className = "element";
        description.className = "element";
        date.className = "element";

        name.innerHTML =  this.task.name;
        name.innerHTML.toLowerCase;
        name.innerHTML.bold;
        description.innerHTML =  this.task.description;
        date.innerHTML =  this.task.date;

        let status=this.task.status;
        if(status=="TO DO"){
            let upBtn = document.createElement('button');
            upBtn.className = 'upButton';
            component.appendChild(upBtn);

        }else if(status=="DOING"){
            let upBtn = document.createElement('button');
            upBtn.className = 'upButton';
            component.appendChild(upBtn);
            let downBtn = document.createElement('button');
            upBtn.className = 'downButton';
            component.appendChild(downBtn);

        }else{
            let downBtn = document.createElement('button');
            upBtn.className = 'downButton';
            component.appendChild(downBtn);
        }
        component.appendChild(name);
        component.appendChild(description);
        component.appendChild(date);
        component.appendChild(delBtn);



        delBtn.addEventListener('click',this.deleteTask);
        return component;
    }


    
}