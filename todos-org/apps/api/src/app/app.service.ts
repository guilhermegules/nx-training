import { Todo } from '@todos-org/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Learn Nx' }, { title: 'Learn RxJs' }];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo(): void {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)} 🦈`
    })
  }
}
