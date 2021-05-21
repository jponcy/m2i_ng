import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Game, GameCategory } from './models';

/**
 * Créé avec : ng generate service game-list/game-api --skip-tests
 */
@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  constructor(private readonly http: HttpClient) { }

  getAllGenres(): Observable</* GameCategory[] */ any> {
    // Le champs label (dans notre code Angular) se nomme name (dans l'API).
    // Cela pose problème pour faire la liaison. Je dois gérer ce cas. Les principales possibilités sont :
    // 1) renommer notre attribut dans notre (Angular) et bien impacter ce changement partout
    // 2) convertir/DTO (utilisation d'opérateurs rxjs)
    return this.http.get<{ id: number, name: string}[]>('http://localhost:3000/genres')
        // .pipe(map(this.convertionManuelleV1));

        // Avec la fonction map du type Array.
        // .pipe(map(valeurs =>
        //   valeurs.map(val => {
        //     return { id: val.id, label: val.name };
        //   })));

        // Quand le seul but d'une arrow function est de retourner un objet, on peut adopter une nouvelle syntaxe. ({ json })
        // .pipe(map(valeurs =>
        //   valeurs.map(val => ({ id: val.id, label: val.name }))
        // ));

        // On peut utiliser le pattern matching / destructuration de paramètre.
        // Exemple de destructuration :
        // const o = { nom: 'Dupont', prenom: 'Jean', age: 19 }
        // const { nom, prenom } = o;
        // --- autre exemple avec un tableau
        // const t = Array.from({length: 100}, (_, i) => i + 1)
        // const [ valeur1, valeur2, ...autres ] = t;
        .pipe(map(valeurs =>
          valeurs.map(({ id, name: label }) => ({ id, label }))
        ));
  }

  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>('http://localhost:3000/games')
        .pipe(delay(200));
  }

  delete(id: number): Observable<void> {
    // return this.http.delete<void>('http://localhost:3000/games/' + id);
    return this.http.delete<void>(`http://localhost:3000/games/${id}`);
  }

  /**
   * Convertion "étendu" avec un algorithme détaillé.
   */
  private readonly convertionManuelleV1 = (valeurs: any[]) => {
    const retour = [];

    for (const val of valeurs) {
      const id = val.id;
      const label = val.name;

      // retour.push({ id: id, label: label });
      retour.push({ id, label });
    }

    return retour;
  }
}
