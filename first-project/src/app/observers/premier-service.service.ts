import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PremierServiceService {

  getValues(): Observable<number> {
    return of(1, 5, 2);
  }
}
