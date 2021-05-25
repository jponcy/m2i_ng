import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <p>La page demandée n’existe pas.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent { }
