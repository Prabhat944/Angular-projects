import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title:string = "List";
  showAddForm:boolean = false;
  subscription?:Subscription;

  constructor(private uiservice:UiService){
    this.subscription = this.uiservice.onToggle().subscribe((value)=>{
      console.log("tag inside subscription")
      this.showAddForm = value;
    })
  }
  onAddHandler(){
    this.uiservice.toggleTaskAdd();
    console.log("Add button clicked");
  }
}
