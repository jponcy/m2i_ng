import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html'
})
export class GameFormComponent implements OnInit {

  private id: number;

  constructor(private readonly route: ActivatedRoute) { }

  get title(): string {
    let result: string = null;

    if (this.id) {
      result = 'Edit ' + this.id;
    } else {
      result = 'New';
    }

    return result;
  }

  ngOnInit(): void {
    if (this.route.snapshot.params.productId) {
      this.id = +this.route.snapshot.params.productId;
    }
  }
}
