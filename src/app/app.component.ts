import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  list:any[]=[];
  name:string = ' ';
  addTask(item:string){
    this.list.push({id:this.list.length, name:item});
    this.name = ' ';
  }

  removeTask(id:number){
    this.list= this.list.filter(item=> item.id!==id);
     
  }
}
