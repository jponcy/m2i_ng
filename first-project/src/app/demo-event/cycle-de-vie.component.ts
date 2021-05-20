import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

/**
 * Étapes principales du cycle de vie (géré par Angular)
 * =====================================================
 *
 * Initialisation :
 * - création du composant : new CycleDeVieComponent()
 * - initialise le composant : appele de la méthode ngOnInit (si on a implémenté l'interface OnInit)
 * - affichage graphique (lecture/interprétation complête du HTML ; passage de paramètre, ...)
 * - post-initialisation : appele de la méthode ngAfterViewInit (si on a implémenté l'interface AfterViewInit)
 *
 * Destruction :
 * - libération des dépendances : appele la méthode ngOnDestroy (si on a implémenté l'interface OnDestroy)
 */
@Component({
  selector: 'app-cycle-de-vie',
  template: `
    <p id="target">Salut</p>
  `
})
export class CycleDeVieComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() {
    console.log('constructor', this.getTexte());
  }

  ngOnInit(): void {
    console.log('init', this.getTexte());
  }

  ngAfterViewInit(): void {
    console.log('after view init', this.getTexte());
  }

  ngOnDestroy(): void {
    console.log('destroy', this.getTexte());
  }

  private getTexte(): string {
    let resultat: string = null;
    const target = document.getElementById('target'); // Ce n'est pas une bonne façon de faire en Angular.

    if (target) {
      resultat = target.innerText;
    }

    return resultat;
  }
}
