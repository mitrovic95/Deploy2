import { Component, OnInit } from '@angular/core';
import { Slike } from 'src/app/model/slike';
import { SlikeService } from 'src/app/services/slike.service';

@Component({
  selector: 'app-slike',
  templateUrl: './slike.component.html',
  styleUrls: ['./slike.component.css']
})
export class SlikeComponent implements OnInit {

  public slike: Slike[];
  public slika: Slike;
  public id?: number;
  public currentPageNumber: number;
  // tslint:disable-next-line:no-inferrable-types
  public sizePage: number = 6;
  public ukupnoRepertoara: number;
  public ukupnoStrana: number;
  public ukupnoStranaNiz: any[];

  constructor (private slikeService: SlikeService) { }

  ngOnInit() {
    this.currentPageNumber = 0;
    this.loadDate();

  }

  loadDate() {
    this.slikeService.getSlika(this.currentPageNumber, this.sizePage)
    .subscribe(
      (data) => { this.slike = data.body;
                  this.ukupnoRepertoara = + data.headers.get('X-Total-Count');
                  this.ukupnoStrana = Math.ceil(this.ukupnoRepertoara / this.sizePage);
                  this.ukupnoStranaNiz = Array(this.ukupnoStrana).fill(4);
                  console.log(this.ukupnoStranaNiz);
                }
    );
  }

  delete(index: number) {
    console.log(this.slike[index]);
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


  // ngOnInit() {
  //   this.slikeService.getSlike().subscribe((slike) => {
  //     this.slike = slike;
  //   });
  //   this.slikeService.getSlike();
  //   this.slikeService.slike.subscribe(data => console.log(data));

  // }

}
