import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import {TaskService} from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,TaskItemComponent,AddTaskComponent,FooterComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks:Task[] = [];
  showAddForm:boolean = false;
  subscription?:Subscription;
  constructor(private taskService:TaskService,private uiService:UiService ){
    this.subscription = this.uiService.onToggle().subscribe((value)=>{
      this.showAddForm = value;
    })
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks;
    });
  }

  onDeleteHandler(task?:Task){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter((t)=>t.id !== task?.id);
    })
  }

  updateHandler(task?:Task){
    if(!task)return;
    task.status = task?.status === "completed" ? "pending" : task?.status === "pending" ? "in process" : "completed";
    const index = this.tasks.findIndex((t)=>t.id === task?.id);
    this.taskService.updateTask(task).subscribe(()=>{

      this.tasks[index] = task;

    })
  }

  addTaskHandler(task?:Task){
    this.taskService.addTask(task).subscribe((newTask)=>{
        this.tasks.push(newTask);
})};
}
