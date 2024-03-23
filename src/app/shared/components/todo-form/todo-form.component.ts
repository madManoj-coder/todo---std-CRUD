import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { TodoService } from '../../services/todo.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todoForm !: FormGroup;
  todoItem !: string;
  isInEditMode !: boolean;
  editTodo !: Itodo;

  constructor(
    private _uuidService: UuidService,
    private _todoService: TodoService,
    private _snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.createTodoForm()
    this._todoService.editAndUpdTodoSub$
      .subscribe(res => {
        // console.log(res)
        this.editTodo = res;
        this.isInEditMode = true;
        this.todoForm.patchValue(res)
      })
  }

  createTodoForm() {
    this.todoForm = new FormGroup({
      todoItem: new FormControl(null, [Validators.required])
    })
  }

  onTodoSubmit() {
    if (this.todoForm.valid) {
      let todoObj = { ...this.todoForm.value, id: this._uuidService.generateUUID() }
      // this._todoService.todoSubject$.next(todoObj)
      this._todoService.addTodo(todoObj)
      this.todoForm.reset()
      this.todoItem = todoObj.todoItem
      this._snackbarService.openSnackBar(`New TodoItem ${this.todoItem} is added successfully !!!`)
    }
  }

  onUpdate() {
    if (this.todoForm.valid) {
      let updatedObj = {
        ...this.todoForm.value,
        id: this.editTodo.id
      }
      console.log(updatedObj);
      this._todoService.updateTodo(updatedObj)
      this.todoForm.reset()
      this._snackbarService.openSnackBar(`${updatedObj.todoItem} is updated successfully`)
      this.isInEditMode = false;
    }

  }



}
