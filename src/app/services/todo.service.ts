import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoURL: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoURL}${this.todosLimit}`);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todoURL}/${todo.id}`;

    return this.http.put(url, todo, httpOption);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todoURL}/${todo.id}`;

    return this.http.delete<Todo>(url, httpOption);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoURL, todo, httpOption);
  }
}
