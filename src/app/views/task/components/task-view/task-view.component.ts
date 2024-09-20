import { Component } from '@angular/core';
import { ConstIRIS } from '../../../../models/const';
import { Category } from '../../../../models/category';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../../../shared/services/services.service';
import { ToDoItemInterface } from '../../../../models/ITodoInterface';

@Component({
  selector: 'app-task-view',
  standalone: false,
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss',
})
export class TaskViewComponent {
  imgLogo: string = ConstIRIS.URL_LOGO;
  task: Category[] | undefined;
  selectedCategory: string = "ALL";
  nameTodo = '';
  todos: ToDoItemInterface[] = [];
  filteredTodos: ToDoItemInterface[] = [];

  constructor(private serviceToDo$: ServicesService) { }

  ngOnInit() {
    this.serviceToDo$.getAll().subscribe((res: ToDoItemInterface[]) => {
      this.todos = res;
      this.filteredTodos = this.todos;
    });

    this.task = [
      { name: 'All', description: 'ALL' },
      { name: 'To do', description: 'TD' },
      { name: 'Done', description: 'DONE' }
    ];
  }

  ngOnChanges() {
    this.filterTodos();
  }

  filterTodos() {
    if (this.selectedCategory === 'ALL') {
      this.filteredTodos = this.todos;
    } else if (this.selectedCategory === 'TD') {
      this.filteredTodos = this.todos.filter(todo => !todo.isCompleted);
    } else if (this.selectedCategory === 'DONE') {
      this.filteredTodos = this.todos.filter(todo => todo.isCompleted);
    }
  }

  click(): void {
    this.serviceToDo$.create({ title: this.nameTodo, description: '', isCompleted: false })
      .subscribe((newTodo) => {
        this.todos.push(newTodo);
        this.filterTodos();
      });
    this.nameTodo = '';
  }

  borrar(id: number) {
    this.serviceToDo$.delete(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.filterTodos();
    });
  }

  updateStatus(item: ToDoItemInterface): void {
    item.isCompleted = !item.isCompleted;
    this.serviceToDo$.update(item).subscribe(() => {
      this.filterTodos();
    });
  }
}
