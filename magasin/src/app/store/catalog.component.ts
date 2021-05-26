import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {

  form = this.fb.group({
    nom: null,
    adresse: '',
    description: '',
    produits: this.fb.array([])
  });

  constructor(private readonly fb: FormBuilder) { }

  get champProduits(): FormArray {
    return this.form.controls.produits as FormArray;
  }

  champProduit(index: number): FormGroup {
    return this.champProduits.controls[index] as FormGroup;
  }

  ajouterProduit(): void {
    this.champProduits.push(this.fb.group({
      nom: null,
      prix: null
    }));
  }

  supprimerProduit(index: number): void {
    this.champProduits.removeAt(index);
  }

  onSubmit(): void {
    window.alert('Les valeurs du formulaire sont : ' + this.controlToStr(this.form));
  }

  private controlToStr(control: AbstractControl): string {
    let result = '';

    if (control instanceof FormArray) {
      for (let i = 0; i < control.controls.length; i++) {
        if (i) {
          result += ', ';
        }

        result += `${this.controlToStr(control.at(i))}`;
      }
    } else if (control instanceof FormGroup) {
      // tslint:disable-next-line:forin
      for (const key in control.controls) {
        if (result) {
          result += ', ';
        }

        result += key + '=' + this.controlToStr(control.controls[key]);
      }

      result = `[${result}]`;
    } else {
      result += control.value;
    }

    return result;
  }
}
