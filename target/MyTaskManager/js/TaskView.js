class TaskView{

    constructor(task){
        this.task = task;
        this.onDeleteFinished = null;       
    }

    deleteTask = ()=>{
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange',()=>{
            if(xhr.readyState==4){
                console.log(xhr.responseText);
                var response = JSON.parse(xhr.responseText);
                if(response.message=='Operacion Exitosa'){
                    if(this.onDeleteFinished!=null){
                        this.onDeleteFinished();
                        }
                }else{
                    alert('ERROR');
                }
               
            }
        });

        xhr.open('DELETE','/api/tasks/delete/'+this.task.id);
        xhr.send();
    }


    render = ()=>{
        let component = document.createElement('div');
        component.id = 'task'+this.task.id;
        component.className = 'task';
        let name = document.createElement('p'); 
        name.className = 'name';
        let description = document.createElement('small'); 
        let delBtn = document.createElement('button');
        delBtn.innerHTML = 'X';
        delBtn.className = 'delBtn';


        name.innerHTML = this.task.name; 
        description.innerHTML = this.task.description; 

        component.appendChild(name);
        component.appendChild(description);
        component.appendChild(delBtn);

        //Comportamiento
        delBtn.addEventListener('click',this.deleteTask);
        return component;


    }
}