import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()

export class HomePageService {
  base_url = environment.base_url;
  constructor(private http: HttpClient) { }

  addData(params) {
    return this.http.post(this.base_url + "sendTodo", params, httpOptions);
  }

  getData() {
    return this.http.get(this.base_url + "getTodos");
  }
  updateData(todo) {
    let todoParams = {
      todo: todo.todo
    }
    return this.http.put(this.base_url + "updateTodo" + `/${todo.id
      }`, todoParams
    );
  }
  deleteData(id) {
    return this.http.delete(this.base_url + "deleteTodo" + `/${id
      }`);
  }
}