import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskInterface } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>('http://localhost:3000/tasks');
  }

  add(task: Partial<TaskInterface>): Observable<TaskInterface> {
    return this.http.post<TaskInterface>('http://localhost:3000/tasks/', task);
  }

  update(id: number, task: Partial<TaskInterface>): Observable<TaskInterface> {
    return this.http.patch<TaskInterface>(`http://localhost:3000/tasks/${id}`, task);
  }

  remove(id: number): Observable<object> {
    return this.http.delete<object>(`http://localhost:3000/tasks/${id}`);
  }
}
