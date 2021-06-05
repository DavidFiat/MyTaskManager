package model;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class Task {

    public final static String TO_DO = "TO DO";
    public final static String DOING = "DOING";
    public final static String DONE = "DONE";
    private int id;
    private String status;
    private String name;
    private String description;
    private String date;


    public Task(){

    }
    public Task(String name, String description) {
        this.status = TO_DO;
        this.name = name;
        this.description = description;
        Calendar dat = Calendar.getInstance();
        dat = new GregorianCalendar();
        this.date = ""+dat.get(Calendar.DAY_OF_MONTH)+"/"+dat.get(Calendar.MONTH)+"/"+dat.get(Calendar.YEAR);
    }

    public Task(int id, String status, String name, String description, String date) {
        this.id = id;
        this.status = status;
        this.name = name;
        this.description = description;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}