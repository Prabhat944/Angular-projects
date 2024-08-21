import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Task } from '../../task';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {
name:string = "";
description:string = "";
date:string = "";
status:string = "pending";
errorMessage:string = "";
@Output() onSubmitHandler:EventEmitter<Task> = new EventEmitter();
constructor() { }

ngOnInit(): void {
  
}

onSubmit(){
  if(!this.name){
    this.errorMessage = "Please Enter Task name"
    return;
  }

  const newTask={
    name: this.name,
    description: this.description,
    status: this.status,
    date:this.date,
  }
  this.onSubmitHandler.emit(newTask);
  this.name = "";
  this.description = "";
  this.date ="";
 };
}
