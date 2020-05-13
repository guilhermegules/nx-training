import { Todo } from '@todos-org/data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchApi(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/api/todos');
  }

  addTodo(): Observable<Todo> {
    return this.http.post<Todo>('/api/addTodo', {});
  }
}
