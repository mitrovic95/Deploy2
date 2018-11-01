import { Slike } from "src/app/model/slike";

export interface Vesti {
  id?: number;
  opis: string;
  naslov: string;
  slike: Slike;
}
