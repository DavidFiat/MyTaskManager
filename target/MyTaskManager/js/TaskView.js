class TaskView{

    constructor(task){
        this.task = task;
        this.onDeleteFinished= null;
        this.onUpdating=null;
    
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
        xhr.open('DELETE','/api/tasks/delete/'+this.task.id);
        xhr.send();
    }

    upTaskToDoing = ()=>{
        let taskObj = {
            
            id:this.task.id,
            name: this.task.name,
            description: this.task.description,
            date: this.task.date,
            status:"DOING"
        }
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange',()=>{
            if(xhr.readyState ==4){
                if(this.onUpdating!=null){
                    this.onUpdating();
                }
            }
        });
    xhr.open('PUT','/api/tasks/edit');
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify(taskObj));
    }
    upTaskToDone = ()=>{
        let taskObj = {
            
            id:this.task.id,
            name: this.task.name,
            description: this.task.description,
            date: this.task.date,
            status:"DONE"
        }
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange',()=>{
            if(xhr.readyState ==4){
                if(this.onUpdating!=null){
                    this.onUpdating();
                }
            }
        });
    xhr.open('PUT','/api/tasks/edit');
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify(taskObj));
    }  

    downTaskToToDo = ()=>{
        
        let taskObj = {
            id:this.task.id,
            name: this.task.name,
            description: this.task.description,
            date: this.task.date,
            status:"TO DO"
            }
          
            let xhr = new XMLHttpRequest();
            xhr.addEventListener('readystatechange',()=>{
                if(xhr.readyState ==4){
                    if(this.onUpdating!=null){
                        this.onUpdating();
                    }
                }
            });
        xhr.open('PUT','/api/tasks/edit');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(JSON.stringify(taskObj));
    }

    downTaskToDoing = ()=>{
        
        let taskObj = {
            id:this.task.id,
            name: this.task.name,
            description: this.task.description,
            date: this.task.date,
            status:"DOING"
            }
          
            let xhr = new XMLHttpRequest();
            xhr.addEventListener('readystatechange',()=>{
                if(xhr.readyState ==4){
                    if(this.onUpdating!=null){
                        this.onUpdating();
                    }
                }
            });
        xhr.open('PUT','/api/tasks/edit');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(JSON.stringify(taskObj));
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
            upBtn.addEventListener('click',this.upTaskToDoing);


        }else if(status=="DOING"){
            let upBtn = document.createElement('button');
            upBtn.className = 'upButton';
            component.appendChild(upBtn);
            let downBtn = document.createElement('button');
            downBtn.className = 'downButton';
            component.appendChild(downBtn);
            downBtn.addEventListener('click',this.downTaskToToDo);
            upBtn.addEventListener('click',this.upTaskToDone);


        }else{
            let downBtn = document.createElement('button');
            downBtn.className = 'downButton';
            component.appendChild(downBtn);
            downBtn.addEventListener('click',this.downTaskToDoing);

        }
        component.appendChild(name);
        component.appendChild(description);
        component.appendChild(date);
        component.appendChild(delBtn);



        delBtn.addEventListener('click',this.deleteTask);
        return component;
    }


    
}