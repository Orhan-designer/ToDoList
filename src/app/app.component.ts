import { Component } from '@angular/core';

const todos = [
  {
    title: 'Задача на сегодня 1',
    completed: false,
  },
  {
    title: 'Задача на сегодня 2',
    completed: false,
  },
  {
    title: 'Задача на сегодня 3',
    completed: false,
  },
  {
    title: 'Задача на сегодня 4',
    completed: false,
  },
]
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {

  name = 'Angular';
  todos = todos;

  toggle(todo: any) {
    todo.completed = !todo.completed;
   /*  console.log('Turning: ', todo); */
  }

  delete(todo: any) {
    let index = this.todos.indexOf(todo);
    if (index > -1) this.todos.splice(index, 1);
  }
}
