import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../../interfaces/task.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.view.html',
  styleUrls: ['./todo.view.css']
})
export class TodoView implements OnInit {

  tasks: TaskInterface[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAll()
    .subscribe(
      tasks => this.tasks = tasks
    );
  }

  add(description: string): void {
    this.todoService.add({
      description,
      completed: false
    })
    .subscribe(
      task => this.tasks.push(task)
    );
  }

  remove(id: number): void {
    this.todoService.remove(id)
    .subscribe(
      () => {
        const index = this.tasks.findIndex(task => task.id === id);
        this.tasks.splice(index, 1);
      },
      error => console.log(error)
    );
  }

  toggleCompleted(task: TaskInterface): void {
    this.todoService.update(task.id, { completed: !task.completed })
    .subscribe(
      taskResult => {
        const index = this.tasks.findIndex(taskStore => taskStore.id === task.id);
        this.tasks[index] = taskResult;
      }
    );
  }

}
