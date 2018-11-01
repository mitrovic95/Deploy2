

import { Component, OnInit, HostListener } from '@angular/core';
import { Osoba } from 'src/app/model/osoba';
import { OsobeService } from 'src/app/services/osobe.service';

@Component({
  selector: 'app-osobe',
  templateUrl: './osobe.component.html',
  styleUrls: ['./osobe.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class OsobeComponent implements OnInit {

  public osobe: Osoba[];
  public osoba: Osoba;
  public id?: number;
  public currentPageNumber: number;
  public sizePage: number;
  public imgVersion = 1;
  public izabranaOsoba: Osoba;

  public ukupnoRepertoara: number;
  public ukupnoStrana: number;
  public ukupnoStranaNiz: any[];


  public visina;

  constructor(private osobeService: OsobeService) { }

  ngOnInit() {
    this.currentPageNumber = 0;
    this.visina = window.screen.height;
    this.sizePage = Math.round((this.visina - 117 - 195 - 50) / 100 );
    if (this.sizePage >= 7){
      this.sizePage = 6;
    }
    this.loadDate();

  }

  loadDate() {
    this.osobeService.getOsoba(this.currentPageNumber, this.sizePage)
      .subscribe(
        (data) => {
        this.osobe = data.body;
          this.ukupnoRepertoara = + data.headers.get('X-Total-Count');
          this.ukupnoStrana = Math.ceil(this.ukupnoRepertoara / this.sizePage);
          this.ukupnoStranaNiz = Array(this.ukupnoStrana).fill(4);

          if (!this.izabranaOsoba) {
            this.izabranaOsoba = this.osobe[0];
          }

          console.log(this.osobe);
        }
      );
  }

  delete(index: number) {
    console.log(this.osobe[index]);
  }

  ocitajStranu(i) {
    if (this.currentPageNumber >= 1) {
      this.currentPageNumber = i;
    }
    this.loadDate();
  }

  ocitajSledecuStranu() {
    if (this.currentPageNumber == this.ukupnoStrana - 1) {
      return;
    }
    this.currentPageNumber = this.currentPageNumber + 1;
    this.loadDate();
  }

  promenaIzabraneOsobe(osoba: Osoba) {
    this.izabranaOsoba = osoba;
  }

  onResize(event){
    this.visina = window.screen.height;
    this.sizePage = Math.round((this.visina - 117 - 195 - 50) / 100 );
    if (this.sizePage >= 7){
      this.sizePage = 6;
    }
    this.loadDate();
  }

}
