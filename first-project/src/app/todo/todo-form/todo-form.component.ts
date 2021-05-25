import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent implements OnInit {

  id: string = null;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => params.id)

    // Le nom du paramètre (id) a été déterminé dans le routing par :id
    this.id = this.route.snapshot.params.id;
  }
}
