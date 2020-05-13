import { Todo } from './interfaces/todo';
import { Component } from '@angular/core';

@Component({
  selector: 'todos-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [{ title: 'Learn Nx' }, { title: 'Learn RxJs' }];

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)} 🦈`
    });
  }
}
