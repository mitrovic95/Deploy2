import { Predstava } from "src/app/model/predstava";

export interface Repertoar {
  id?: number;
  datum: number;
  predstava: Predstava;
}
