import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@todos-org/data';

@Component({
  selector: 'todos-org',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];
  constructor() { }

  ngOnInit(): void {
  }

}
