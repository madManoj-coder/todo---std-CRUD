import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoArray: Array<Itodo> = [
    {
      todoItem: "Angular",
      id: "121"
    }
  ]

  todoSubject$: Subject<Itodo> = new Subject();
  editAndUpdTodoSub$: Subject<Itodo> = new Subject();
  constructor() {
    // For practice
    // this.todoSubject$
    //   .subscribe(res => {
    //     this.todoArray.push(res)
    //     console.log(this.todoArray);
    //   })
  }

  fetchAllTodo(): Array<Itodo> {
    return this.todoArray
  }

  addTodo(obj: Itodo) {
    // API call to add todo Object
    this.todoArray.push(obj)
  }

  updateTodo(updatedTodo: Itodo) {
    // API call to update todo Object
    for (let i = 0; i < this.todoArray.length; i++) {
      if (this.todoArray[i].id === updatedTodo.id) {
        this.todoArray[i] = updatedTodo;
      }
    }
  }

  removeTodo(todo: Itodo) {
    // API call to remove todo Item
    let getIndex = this.todoArray.findIndex(todoItem => todoItem.id === todo.id)
    this.todoArray.splice(getIndex, 1)
  }
}
