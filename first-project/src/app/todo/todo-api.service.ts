import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from './models';

const URL_TODO = 'http://localhost:8080/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private readonly http: HttpClient) { }

  /**
   * Retourne toutes les tâches par l'API.
   */
  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(URL_TODO);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${URL_TODO}/${id}`);
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(URL_TODO, todo);
  }

  update(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${URL_TODO}/${id}`, todo);
  }
}
