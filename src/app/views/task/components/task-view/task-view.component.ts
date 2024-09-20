import { Component } from '@angular/core';
import { ConstIRIS } from '../../../../models/const';
import { Category } from '../../../../models/category';
import { SharedModule } from '../../../../shared/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [SharedModule,FormsModule,CommonModule],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss'
})
export class TaskViewComponent {
   imgLogo :string = ConstIRIS.URL_LOGO;
   task: Category[] | undefined;

   selectedCategory: string = "ALL";
  nameTodo = ''

   todos :string[]= []

   ngOnInit() {
       this.task = [
           { name:'All', code:'ALL'},
           { name: 'To do', code: 'TD' },
           { name: 'Done', code: 'DONE' }

       ];
   }

   click():void{
    this.todos.push(this.nameTodo)
    this.nameTodo=''
    console.log(this.todos)
    console.log("Hol")
   }

   borrar(index:number){
        this.todos.splice(index,1);
   }
}
