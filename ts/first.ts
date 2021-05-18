// ES5.
// var toto = 'Salut';
// toto = 3;

// let => variable/const => constante
let toto = 'Salut';

toto = '4';

let monEntier: number;

// monEntier = '4'; // Erreur
monEntier = 4;


class Class1 {
  private valeur = 'Classe 1';

  constructor() {
    const c2 = new Class2();

    c2.maFonctionFlechee(); // Affichage de : Classe 2.
  }

  maFonctionAnonyme = function () {
    console.log(this.valeur);
  }
}

class Class2 {
  private valeur/*: string*/ = 'Classe 2';

  constructor() {
    const c1 = new Class1();

    // La fonction anonyme ne récupère pas son contexte initial mais celui du code appelant.
    c1.maFonctionAnonyme(); // Affichage de : Classe 2.
  }

  maFonctionFlechee = () => console.log(this.valeur);
}

let fn = (a: number) => a ** 2;

fn = (t: number) => 4;


[1, 3, 2].map(fn);
[1, 3, 2].map(a => a ** 2);

const values = [4, 2];

values.push(3);
// values.push('3'); // Erreur.

// values = [3, 4];



{ // Somme
  const values = [1, 4, 5, 32, 2];
  let sum: number;

  for (const e of values) {
    sum += e;
  }
}

{
  const valeurs = ['a', 'Jean', 'Dupont'];

  valeurs.join(', '); // a, Jean, Dupont

  valeurs.reduce((acc, e) => acc + ', ' + e);
  // 1) acc = 'a',       e = 'Jean'   => 'a' + ', ' + 'Jean           => 'a, Jean'
  // 2) acc = 'a, Jean', e = 'Dupont' => 'a, Jean' + ', ' + 'Dupont'  => 'a, Jean, Dupont'


  const o = ['a', 'b', 'toto'].reduce((acc, e) => ({...acc, [e]: 42}), {});
}
