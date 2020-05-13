import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { Todo } from './interfaces/todo';
import { Component } from '@angular/core';

@Component({
  selector: 'todos-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [{ title: 'Learn Nx' }, { title: 'Learn RxJs' }];

  constructor(private apiService: ApiService, private http: HttpClient) {}

  fetchApi() {
    this.apiService.fetchApi().subscribe(todo => (this.todos = todo));
  }

  addTodo() {
    this.apiService.addTodo().subscribe(() => {
      this.fetchApi();
    });
  }
}
