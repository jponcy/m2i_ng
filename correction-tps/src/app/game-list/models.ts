// @JsonObject('GameCat')
// export class GameCat {
//   @JsonProperty('id', Number)
//   id: number;

//   @JsonProperty('name', String)
//   label: string;
// }


export interface GameCategory {
  id: number;
  label: string;
}

export interface Game {
  id: number;
  title: string;
  genres: string[];

  /** @remarks Note sur 10. */
  note: number;

  coverImage: string;
  description: string;
}
