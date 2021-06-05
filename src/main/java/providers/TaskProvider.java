package providers;

import db.DBConnection;
import model.Task;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class TaskProvider {

    public void create(Task task) throws SQLException {
        String sql = "INSERT INTO A00359132Tasks(status, name,description,date) VALUES('$STATUS','$NAME','$DESCRIPTION','$DATE')";
        sql = sql.replace("$STATUS",task.getStatus());
        sql = sql.replace("$NAME",task.getName());
        sql = sql.replace("$DESCRIPTION",task.getDescription());
        sql = sql.replace("$DATE",task.getDate());
        DBConnection connection = new DBConnection();
        connection.connect();
        connection.commandSQL(sql);
        connection.disconnect();

    }

    public ArrayList<Task> getAllTasks() throws SQLException {
        ArrayList<Task> output = new ArrayList<Task>();
        String sql="SELECT * FROM A00359132Tasks";
        DBConnection connection = new DBConnection();
        connection.connect();
        ResultSet resultSet = connection.getDataBySQL(sql);
        while (resultSet.next()){
            int id = resultSet.getInt(resultSet.findColumn("id"));
            String status = resultSet.getString(resultSet.findColumn("status"));
            String name = resultSet.getString(resultSet.findColumn("name"));
            String description = resultSet.getString(resultSet.findColumn("description"));
            String date = resultSet.getString(resultSet.findColumn("date"));
            Task task = new Task(id,status, name, description,date);
            output.add(task);
        }
        connection.disconnect();
        return output;

    }

    public void edit(Task task) throws SQLException {
        String sql = "UPDATE A00359132Tasks SET name='$NAME',description='$DESCRIPTION' WHERE id=$ID";
        sql = sql.replace("$ID", String.valueOf(task.getId()));
        sql = sql.replace("$NAME", task.getName());
        sql = sql.replace("$DESCRIPTION", task.getDescription());
        DBConnection connection = new DBConnection();
        connection.connect();
        connection.commandSQL(sql);
        connection.disconnect();

    }

    public void deleteById(int id) throws SQLException {
        String sql = "DELETE FROM A00359132Tasks WHERE id="+id;
        DBConnection connection = new DBConnection();
        connection.connect();
        connection.commandSQL(sql);
        connection.disconnect();

    }

}
