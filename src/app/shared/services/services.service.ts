import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItemInterface } from '../../models/ITodoInterface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl = 'https://localhost:7202/api/todo';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ToDoItemInterface[]> {
    return this.http.get<ToDoItemInterface[]>(this.apiUrl);
  }


  create(toDoItem: ToDoItemInterface): Observable<ToDoItemInterface> {
    return this.http.post<ToDoItemInterface>(this.apiUrl, toDoItem);
  }

  update(toDoItem: ToDoItemInterface): Observable<ToDoItemInterface> {
    return this.http.put<ToDoItemInterface>(`${this.apiUrl}/${toDoItem.id}`, toDoItem);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
