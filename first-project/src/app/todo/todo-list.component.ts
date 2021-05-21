import { Component, OnInit } from '@angular/core';
import { Todo } from './models';
import { TodoApiService } from './todo-api.service';

/**
 * étapes pour utiliser notre API afin de récupérer la liste des tâches :
 * 1) Injecter l'API
 * 2) Appeler l'API (dans la méthode ngOnInit)
 * 3) Souscrire à l'observable obtenu par l'API
 * 4) Afficher les tâches obtenue grace à la souscription
 */

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  // 1) Injecter l'API => se fait fans le constructeur.
  // - TodoListComponent -> TodoApiService -> HttpClient
  constructor(private readonly api: TodoApiService) { }

  ngOnInit(): void {
    // 2 + 3)
    this.api
        .getAll() // Retourne un observable.
        .subscribe(todos => this.todos = todos);
  }

  onDelete(index: number, todo: Todo): void {
    this.api
        .delete(todo.id)
        .subscribe(() => {
          this.todos.splice(index, 1);
          window.alert('Suppression réussie');
        });
  }
}
