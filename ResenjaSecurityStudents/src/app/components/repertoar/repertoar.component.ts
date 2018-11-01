import { Component, OnInit } from '@angular/core';
import { Repertoar } from 'src/app/model/repertoar';
import { RepertoarService } from 'src/app/services/repertoar.service';

@Component({
  selector: 'app-repertoar',
  templateUrl: './repertoar.component.html',
  styleUrls: ['./repertoar.component.css']
})
export class RepertoarComponent implements OnInit {

  // constructor (private repertoarService: RepertoarService) { }

  // ngOnInit() {
  //   this.repertoarService.getRepertoar().subscribe((repertoars) => {
  //     this.repertoars = repertoars;
  //   });
  //   this.repertoarService.getRepertoar();
  //   // this.istorijatService.istorijats.subscribe(data => console.log(data));

  // }

  public currentPageNumber: number;
  // tslint:disable-next-line:no-inferrable-types
  public sizePage: number = 6;
  public repertoars: Repertoar[];
  public ukupnoRepertoara: number;
  public ukupnoStrana: number;
  public ukupnoStranaNiz: any[];
  public repertoar: Repertoar;
  public id?: number;



  constructor(private repertoarService: RepertoarService) { }

  ngOnInit() {
    this.currentPageNumber = 0;
    this.loadDate();

  }

  loadDate() {
    this.repertoarService.getRepertoar(this.currentPageNumber, this.sizePage)
    .subscribe(
      (data) => { this.repertoars = data.body;
                  this.ukupnoRepertoara = + data.headers.get('X-Total-Count');
                  this.ukupnoStrana = Math.ceil(this.ukupnoRepertoara / this.sizePage);
                  // this.ukupnoStranaNiz = Array(this.ukupnoStrana).fill(4);
                  // console.log(this.ukupnoStranaNiz);
                }
    );
  }

  delete(index: number) {
    console.log(this.repertoars[index]);
  }

  ocitajStranu(i) {
    this.currentPageNumber = i;
    this.loadDate();
  }

  ocitajSledecuStranu() {
    if (this.currentPageNumber == this.ukupnoStrana - 1){
      return
    }
    this.currentPageNumber = this.currentPageNumber +  1;
    this.loadDate();
  }

  // izvlaci kategoriju iz opisa - potrebno je da opis u svom sadrzaju ima podeljen sadrzaj sa * primer: komedija*Ovo je predstava o tome i tome...
  public kategorija(s?: string) {
   const array = s.split('*');
   return array[0];
  }

}
