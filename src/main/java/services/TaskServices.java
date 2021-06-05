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
    @Path("all")
    public Response getAll(){
        try {
            TaskProvider provider = new TaskProvider();
            ArrayList<Task> tasks = provider.getAllTasks();
            return Response.ok(tasks)
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
