import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ToDoList } from 'src/model/to-list.model';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  lists: ToDoList[] = [];
  displayedColumns: string[] = ['No','Title', 'Values',];
  //dataSource = [...this.lists];
  dataSource = new MatTableDataSource<ToDoList>([]);

  isAdd: boolean= false;

  // @ViewChild(MatTable) table: MatTable<ToDoList>;
  @ViewChild(MatTable)
  table!: MatTable<ToDoList>;


  constructor(private todoService:TodoService) {
    // this.lists = this.todoService.getServices();
    this.refresh();
   }

  ngOnInit(): void {
  }

  createTodo(todoList: ToDoList){

    // this.lists.push(todoList);
    this.lists = this.todoService.updateServices(todoList);
    //this.dataSource = this.lists;
    // this.dataSource.data = this.lists;
    this.refresh();
  }

  cancel(flag: boolean) {
    this.isAdd = flag;
  }
 

  addData() {
    this.isAdd = true;
    // const randomElementIndex = Math.floor(Math.random() * this.lists.length);
    // this.dataSource.push(this.lists[randomElementIndex]);
    // // this.table.renderRows();
    this.refresh();
  }

  removeData() {
    this.lists.pop();
    //this.dataSource.pop();
    // this.table?.renderRows();
    this.refresh();
  }

  refresh() {
    this.todoService.doSomething().subscribe((data: ToDoList[]) => {
      this.dataSource.data = data;
    });
  }

}
