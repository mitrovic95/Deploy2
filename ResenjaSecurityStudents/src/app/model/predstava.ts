import { Slike } from "src/app/model/slike";
import { Osoba } from "src/app/model/osoba";

export interface Predstava {
  id?: number;
  naslov: string;
  opis: string;
  slika: string;
  slike: Slike;
  video: string;
  osoba: Osoba;
}
