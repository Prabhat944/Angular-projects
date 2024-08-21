import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../task';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {
@Input() task?:Task; 
@Output() onDeleteTask = new EventEmitter();
@Output() onToggleClick = new EventEmitter();
faTimes = faTimes;

constructor() { }
ngOnInit(): void {
 
}

onDelete(){
  this.onDeleteTask.emit();
}
onToggle(){
  this.onToggleClick.emit();
}
}
