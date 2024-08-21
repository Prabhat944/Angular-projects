import { Injectable } from '@angular/core';
import { Task } from '../task';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type":"application/json"
  })
};

@Injectable({
  providedIn: 'root'
})



export class TaskService {
  private taskUrl = "http://localhost:5000/tasks";

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.taskUrl);
  }

  deleteTask(task?:Task):Observable<Task>{
    const url = `${this.taskUrl}/${task?.id}`
   return this.http.delete<Task>(url);
  }

  updateTask(task?:Task):Observable<Task>{
    const url = `${this.taskUrl}/${task?.id}`
   return this.http.put<Task>(url,task,httpOptions);
  }
  addTask(task?:Task):Observable<Task>{
    const url = `${this.taskUrl}`
   return this.http.post<Task>(url,task,httpOptions);
  }
}
