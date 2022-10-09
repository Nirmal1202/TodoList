import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToDoList } from 'src/model/to-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  lists: ToDoList[] = [];
 
  constructor() {
    this.lists =  [
      {No: 1, Title: 'Title1', Values: 'value1'},
      {No: 2, Title: 'Title2', Values: 'value2'},
      {No: 3, Title: 'Title3', Values: 'value3'},
      {No: 4, Title: 'Title4', Values: 'value4'}]
   }

   doSomething(): Observable<ToDoList[]> {
    // commonly something like:
    // return this.httpClient.get('https://example.org/rest-api/items/');

    let randomlyFilledList = this.getServices();
    return of(randomlyFilledList);
  }

   getServices(): ToDoList[] {
    return this.lists;
   }
   updateServices(list: any): ToDoList[] {
    list.No = this.lists.length + 1;
    this.lists.push(list);
    return this.lists;
   }
   removeServices() {
    this.lists.pop();
    return this.getServices();
   }

  createServiceFn() {

  }
}
