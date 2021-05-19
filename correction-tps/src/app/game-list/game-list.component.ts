import { Component, OnInit } from '@angular/core';

import { allGameCategories, Game } from './models';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styles: [
  ]
})
export class GameListComponent implements OnInit {

  games: Game[] = [
    {
      id: 1,
      name: 'BattleBlock Theater',
      category: allGameCategories[2],
      note: 9.8,
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/238460/header.jpg?t=1599169670',
      description: `Échoué… capturé… trahi… contraint de se donner en spectacle devant un public félin !? Oui, tout
        ça et bien plus encore dans BattleBlock Theater ! Une fois lancé dans votre quête pour libérer plus de 300 de
        vos amis faits prisonniers par des chats diaboliques et hautement évolués, il n'y aura plus de retour possible.
        Plongez au cœur de cette histoire de trahison renversante et usez de votre arsenal d'armes-outils
        pour progresser dans des centaines de niveaux et élucider le mystère qui plane sur BattleBlock Theater.

        Si vous n'aimez pas être seul sous les feux des projecteurs, partez en ligne ou trouvez un bon copain en chair
        et en os pour accomplir une quête cooptimisée aux petits oignons ou participer aux arènes. Le jeu inclut
        également un éditeur de niveaux pour vous permettre de créer vous-même des épreuves et défis tordus !
      `
    },
    {
      id: 1,
      name: 'BattleBlock Theater',
      category: allGameCategories[2],
      note: 9.8,
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/238460/header.jpg?t=1599169670',
      description: `Lorem ipsum doloris!`
    },
    {
      id: 1,
      name: 'BattleBlock Theater',
      category: allGameCategories[2],
      note: 9.8,
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/238460/header.jpg?t=1599169670',
      description: `Échoué… capturé… trahi… contraint de se donner en spectacle devant un public félin !? Oui, tout
        ça et bien plus encore dans BattleBlock Theater ! Une fois lancé dans votre quête pour libérer plus de 300 de
        vos amis faits prisonniers par des chats diaboliques et hautement évolués, il n'y aura plus de retour possible.
        Plongez au cœur de cette histoire de trahison renversante et usez de votre arsenal d'armes-outils
        pour progresser dans des centaines de niveaux et élucider le mystère qui plane sur BattleBlock Theater.

        Si vous n'aimez pas être seul sous les feux des projecteurs, partez en ligne ou trouvez un bon copain en chair
        et en os pour accomplir une quête cooptimisée aux petits oignons ou participer aux arènes. Le jeu inclut
        également un éditeur de niveaux pour vous permettre de créer vous-même des épreuves et défis tordus !
      `
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  sliceWords(value: string): string {
    const words = value.split(' ', 20);
    let result = words.join(' ');

    if (result !== value) {
      result += '...';
    }

    return result;
  }
}
