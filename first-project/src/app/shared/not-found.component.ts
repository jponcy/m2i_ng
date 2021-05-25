import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <p>
      La page demandée n'a pa été trouvée !
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent { }
