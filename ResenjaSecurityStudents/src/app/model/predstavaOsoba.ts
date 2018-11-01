import { Predstava } from "src/app/model/predstava";
import { Osoba } from "src/app/model/osoba";

   export interface PredstavaOsoba {
        id?: number;
        uloga: string;
        predstava: Predstava;
        osoba: Osoba;
    }
