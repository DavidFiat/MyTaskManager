package services;

import model.Task;
import providers.TaskProvider;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.sql.SQLException;
import java.util.ArrayList;

@Path("tasks")
public class TaskServices {

    @GET
    @Path("fiat")
    public String fiat(){
        return "King Fiat";
    }

    @POST
    @Path("create")
    @Consumes("application/json")
    public Response create(Task task){
        try {
            TaskProvider provider = new TaskProvider();
            provider.create(task);
            return Response
                    .ok(new String("Operación Exitosa"))
                    .header("Content-Type","application/json")
                    .build();
        } catch (SQLException exception) {
            exception.printStackTrace();
            return Response
                    .status(500)
                    .entity(new String("Operación Fallida"))
                    .header("Content-Type","application/json")
                    .build();

        }
    }

    @GET
    @Path("toDoTasks")
    public Response getToDoTasks(){
        try {
            TaskProvider provider = new TaskProvider();
            ArrayList<Task> tasks = provider.getAllTasks();
            ArrayList<Task> toDo = new ArrayList<Task>();
            for(int i=0;i<tasks.size();i++){
                if(tasks.get(i).equals(Task.TO_DO)){
                    toDo.add(tasks.get(i));
                }
            }
            return Response.ok(toDo)
                    .header("Content-Type","application/json")
                    .build();
        } catch (SQLException exception) {
            exception.printStackTrace();
            return Response
                    .status(500)
                    .entity(new String("Operación Fallida"))
                    .header("Content-Type","application/json")
                    .build();
        }
    }

    @GET
    @Path("doingTasks")
    public Response getDoingTasks(){
        try {
            TaskProvider provider = new TaskProvider();
            ArrayList<Task> tasks = provider.getAllTasks();
            ArrayList<Task> doing = new ArrayList<Task>();
            for(int i=0;i<tasks.size();i++){
                if(tasks.get(i).equals(Task.DOING)){
                    doing.add(tasks.get(i));
                }
            }
            return Response.ok(doing)
                    .header("Content-Type","application/json")
                    .build();
        } catch (SQLException exception) {
            exception.printStackTrace();
            return Response
                    .status(500)
                    .entity(new String("Operación Fallida"))
                    .header("Content-Type","application/json")
                    .build();
        }
    }

    @GET
    @Path("doneTasks")
    public Response getDoneTasks(){
        try {
            TaskProvider provider = new TaskProvider();
            ArrayList<Task> tasks = provider.getAllTasks();
            ArrayList<Task> done = new ArrayList<Task>();
            for(int i=0;i<tasks.size();i++){
                if(tasks.get(i).equals(Task.TO_DO)){
                    done.add(tasks.get(i));
                }
            }
            return Response.ok(done)
                    .header("Content-Type","application/json")
                    .build();
        } catch (SQLException exception) {
            exception.printStackTrace();
            return Response
                    .status(500)
                    .entity(new String("Operación Fallida"))
                    .header("Content-Type","application/json")
                    .build();
        }
    }

    @PUT
    @Path("edit")
    @Consumes("application/json")
    public Response edit(Task task){
        try {
            TaskProvider provider = new TaskProvider();
            provider.edit(task);
            return Response
                    .ok(new String("Operacion Exitosa"))
                    .header("Content-Type","application/json")
                    .build();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            return Response
                    .status(500)
                     .entity(new String("Operacion Fallida"))
                    .header("Content-Type","application/json")
                    .build();
        }
    }

    @DELETE
    @Path("delete/{id}")
    public Response delete(@PathParam("id") int id){
        try {
            TaskProvider provider = new TaskProvider();
            provider.deleteById(id);
            return Response
                    .ok(new String("Operacion Exitosa"))
                    .header("Content-Type","application/json")
                    .build();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            return Response
                    .status(500)
                    .entity(new String("Operacion Fallida"))
                    .header("Content-Type","application/json")
                    .build();
        }
    }



}
