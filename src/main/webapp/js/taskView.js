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

    upTask = ()=>{
        let xhr = new XMLHttpRequest();
        if(this.task.status=="TO DO"){
            this.task.status = "DOING";
        }else if(this.task.status=="DOING"){
            this.task.status = "DONE";
        }
        xhr.open('PUT','http://localhost:8081/MyTaskManager_war/api/tasks/edit/');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(JSON.stringify(this.task));
    }    
    
    downTask = ()=>{
        let xhr = new XMLHttpRequest();
        if(this.task.status=="TO DO"){
            this.task.status = "DOING";
        }else if(this.task.status=="DOING"){
            this.task.status = "DONE";
        }
        xhr.open('PUT','http://localhost:8081/MyTaskManager_war/api/tasks/edit/');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(JSON.stringify(this.task));
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
         description.innerHTML =  this.task.description;
        date.innerHTML =  this.task.date;

        let status=this.task.status;
        if(status=="TO DO"){
            let upBtn = document.createElement('button');
            upBtn.className = 'upButton';
            component.appendChild(upBtn);
            upBtn.addEventListener('click',this.upTask);


        }else if(status=="DOING"){
            let upBtn = document.createElement('button');
            upBtn.className = 'upButton';
            component.appendChild(upBtn);
            let downBtn = document.createElement('button');
            downBtn.className = 'downButton';
            component.appendChild(downBtn);
            downBtn.addEventListener('click',this.downTask);
            upBtn.addEventListener('click',this.upTask);


        }else{
            let downBtn = document.createElement('button');
            downBtn.className = 'downButton';
            component.appendChild(downBtn);
            downBtn.addEventListener('click',this.downTask);

        }
        component.appendChild(name);
        component.appendChild(description);
        component.appendChild(date);
        component.appendChild(delBtn);



        delBtn.addEventListener('click',this.deleteTask);
        return component;
    }


    
}