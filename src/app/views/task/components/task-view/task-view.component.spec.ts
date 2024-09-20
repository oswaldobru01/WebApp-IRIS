import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskViewComponent } from './task-view.component';
import { ServicesService } from '../../../../shared/services/services.service';
import { of } from 'rxjs';
import { ToDoItemInterface } from '../../../../models/ITodoInterface';
import { DropdownModule } from 'primeng/dropdown';
import { provideHttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('TaskViewComponent', () => {
  let component: TaskViewComponent;
  let fixture: ComponentFixture<TaskViewComponent>;
  let mockService: jasmine.SpyObj<ServicesService>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('ServicesService', ['getAll', 'create', 'delete', 'update']);
    await TestBed.configureTestingModule({
      imports: [
        DropdownModule,
        FormsModule
      ],
      declarations: [TaskViewComponent],
      providers: [
        provideHttpClient(),
        { provide: ServicesService, useValue: mockService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskViewComponent);
    component = fixture.componentInstance;
    mockService.getAll.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize todos and filteredTodos on ngOnInit', () => {
    const mockTodos: ToDoItemInterface[] = [
      { id: 1, title: 'Test Task 1', description: '', isCompleted: false },
      { id: 2, title: 'Test Task 2', description: '', isCompleted: true }
    ];

    mockService.getAll.and.returnValue(of(mockTodos));

    component.ngOnInit();

    expect(component.todos).toEqual(mockTodos);
    expect(component.filteredTodos).toEqual(mockTodos);
  });
  it('should filter todos based on selected category', () => {
    component.todos = [
      { id: 1, title: 'Test Task 1', description: '', isCompleted: false },
      { id: 2, title: 'Test Task 2', description: '', isCompleted: true }
    ];

    component.selectedCategory = 'TD';
    component.filterTodos();
    expect(component.filteredTodos).toEqual([{ id: 1, title: 'Test Task 1', description: '', isCompleted: false }]);

    component.selectedCategory = 'DONE';
    component.filterTodos();
    expect(component.filteredTodos).toEqual([{ id: 2, title: 'Test Task 2', description: '', isCompleted: true }]);

    component.selectedCategory = 'ALL';
    component.filterTodos();
    expect(component.filteredTodos).toEqual(component.todos);
  });

  it('should create a new task', () => {
    component.nameTodo = 'New Task';
    const newTask: ToDoItemInterface = { id: 3, title: 'New Task', description: '', isCompleted: false };

    mockService.create.and.returnValue(of(newTask));

    component.click();

    expect(mockService.create).toHaveBeenCalledWith({ title: 'New Task', description: '', isCompleted: false });
    expect(component.todos).toContain(newTask);
    expect(component.nameTodo).toBe('');
  });

  it('should delete a task', () => {
    component.todos = [
      { id: 1, title: 'Task 1', description: '', isCompleted: false },
      { id: 2, title: 'Task 2', description: '', isCompleted: true }
    ];

    mockService.delete.and.returnValue(of(undefined));

    component.borrar(1);

    expect(mockService.delete).toHaveBeenCalledWith(1);
    expect(component.todos.length).toBe(1);
    expect(component.todos[0].title).toBe('Task 2');
  });

  it('should update task status', () => {
    const task: ToDoItemInterface = { id: 1, title: 'Task 1', description: '', isCompleted: false };

    mockService.update.and.returnValue(of(task));

    component.updateStatus(task);

    expect(task.isCompleted).toBe(true);
    expect(mockService.update).toHaveBeenCalledWith(task);
  });
});
