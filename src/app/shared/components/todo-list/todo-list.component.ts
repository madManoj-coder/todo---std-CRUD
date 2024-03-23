import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoArr !: Array<Itodo>;
  todoItem !: string;
  constructor(
    private _todoService: TodoService,
    private _snackBarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.todoArr = this._todoService.fetchAllTodo()
  }

  onEdit(todo: Itodo) {
    console.log(todo);
    this._todoService.editAndUpdTodoSub$.next(todo)
    // this.isEditMode = false;
  }

  onDelete(todo: Itodo) {
    let getConfirmation = confirm('Are you sure you want to delete !!!')
    if (getConfirmation) {
      this._todoService.removeTodo(todo)
      this.todoItem = todo.todoItem
      this._snackBarService.openSnackBar(`${this.todoItem} is deleted successfully !!!`)
    }
  }

}
