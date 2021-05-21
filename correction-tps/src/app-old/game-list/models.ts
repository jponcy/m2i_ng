export interface GameCategory {
  id: number;
  label: string;
}

export interface Game {
  id: number;
  name: string;
  category: GameCategory;
  /** @remarks Note sur 10. */
  note: number;
  coverImage: string;
  description: string;
}

// TODO: Suppression de ce code de 'simulation'.
export const allGameCategories = [
  { id: 1, label: 'RTS' },
  { id: 2, label: 'FPS' },
  { id: 3, label: 'Jeu de platform multijoueur' },
  { id: 4, label: 'Puzzle' }
];
