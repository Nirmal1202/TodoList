import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToDoList } from 'src/model/to-list.model';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  todoForm = new FormGroup({
    title: new FormControl(''),
    value: new FormControl(''),
  });

  @Output('todoListEmit') todoListEmit = new EventEmitter<ToDoList>(); 
  @Output('cancelEmit') cancelEmit = new EventEmitter<boolean>();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  Cancel(){
    this.cancelEmit.emit(false);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // alert(this.todoForm.value);
    if(this.todoForm.valid) {
      let todo = this.todoForm.value;
      // let todoList = new ToDoList();
      let todoList: ToDoList = {
        Title :this.todoForm.controls.title.value ? this.todoForm.controls.title.value : '',
        Values :todo.value ? todo.value : '',
        No: 0
      };

      // todoList.Title = this.todoForm.controls.title.value ? this.todoForm.controls.title.value : '';
      // todoList.Values = todo.value ? todo.value : '';

      this.todoListEmit.emit(todoList);
      console.warn(this.todoForm.value);
    }
  }
}
