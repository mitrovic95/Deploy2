import { Component, OnInit } from '@angular/core';
import { Predstava } from 'src/app/model/predstava';
import { PredstaveService } from 'src/app/services/predstave.service';

@Component({
  selector: 'app-predstave',
  templateUrl: './predstave.component.html',
  styleUrls: ['./predstave.component.css'] 
})
export class PredstaveComponent implements OnInit {

  public currentPageNumber: number;
  // tslint:disable-next-line:no-inferrable-types
  public sizePage: number = 6;
  public predstave: Predstava[];
  public ukupnoPredstava: number;
  public ukupnoStrana: number;
  public ukupnoStranaNiz: any[];
  public predstava: Predstava;
  public id?: number;

  //html
  public visina;

  



  constructor(private predstavaService: PredstaveService) { }

  ngOnInit() {
    this.currentPageNumber = 0;
    
     //html
     this.visina = window.screen.height;
     this.sizePage = Math.round((this.visina - 117 - 58) / 83 );
     if (this.sizePage >= 7){
       this.sizePage = 7;
     }

    this.loadDate();

    

  }

  loadDate() {
    this.predstavaService.getPredstave(this.currentPageNumber, this.sizePage)
    .subscribe(
      (data) => { this.predstave = data.body;
                  this.ukupnoPredstava = + data.headers.get('X-Total-Count');
                  this.ukupnoStrana = Math.ceil(this.ukupnoPredstava / this.sizePage);
                  // this.ukupnoStranaNiz = Array(this.ukupnoStrana).fill(4);
                  // console.log(this.ukupnoStranaNiz);
                }
    );
  }

  delete(index: number) {
    console.log(this.predstave[index]);
  }

  ocitajStranu(i) {
    this.currentPageNumber = i;
    this.loadDate();
  }

  ocitajSledecuStranu() {
    if (this.currentPageNumber == this.ukupnoStrana - 1) {
      return;
    }
    this.currentPageNumber = this.currentPageNumber +  1;
    this.loadDate();
  }

   // izvlaci kategoriju iz opisa - potrebno je da opis u svom sadrzaju ima podeljen sadrzaj sa * primer: komedija*Ovo je predstava o tome i tome...
   public kategorija(s?: string) {
    const array = s.split('*');
    return array[0];
   }

   onResize(event){
    this.visina = window.screen.height;
    this.sizePage = Math.round((this.visina - 117 - 58) / 83 );
    if (this.sizePage >= 7){
      this.sizePage = 7;
    }
    this.loadDate();
  }

  
}
