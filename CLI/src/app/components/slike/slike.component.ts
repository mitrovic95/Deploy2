import { Component, OnInit } from '@angular/core';
import { Slike } from 'src/app/model/slike';
import { SlikeService } from 'src/app/services/slike.service';

//****
import { Predstava } from 'src/app/model/predstava';
import { PredstaveService } from 'src/app/services/predstave.service';

@Component({
  selector: 'app-slike',
  templateUrl: './slike.component.html',
  styleUrls: ['./slike.component.css']
})
export class SlikeComponent implements OnInit {


  //slike
  public slike: Slike[];
  public trazeneSlike: Slike[] = new Array();
  public slikaUnizu: number;
  public slika: Slike;
  public id?: number;
  

  //predstave
  public currentPageNumber: number;
  public sizePage: number = 6;
  public predstave: Predstava[];
  public ukupnoPredstava: number;
  public ukupnoStrana: number;
  public ukupnoStranaNiz: any[];
  public predstava: Predstava;
  

  //html
  public text: string;
  public vidljivostTeksta = false;
  public vidljivostKategorije = true;
  public vidljivostGalerije = false;


  constructor (private slikeService: SlikeService, private predstavaService: PredstaveService) { }

  ngOnInit() {
    this.currentPageNumber = 0;
    this.loadPhotos();
    this.loadDate();
    
  }

   loadDate() {
    this.predstavaService.getPredstave(this.currentPageNumber, this.sizePage)
    .subscribe(
      (data) => { this.predstave = data.body;
                  this.ukupnoPredstava = + data.headers.get('X-Total-Count');
                  this.ukupnoStrana = Math.ceil(this.ukupnoPredstava / this.sizePage);
                  // this.ukupnoStranaNiz = Array(this.ukupnoStrana).fill(4);
                  console.log(data);
                }
    );
  } 

  loadPhotos() {
    this.slikeService.getSlika(0, 20000)
    .subscribe(
      (data) => { this.slike = data.body;
                  console.log(data);
                }
    );
  } 



  delete(index: number) {
    console.log(this.slike[index]);
  }

  
  ocitajPrethodnuStranu(){
    if(this.currentPageNumber == 0){
      return;
    }
    this.currentPageNumber = this.currentPageNumber-1;
    this.loadDate();

  }

  // ocitajSledecuStranu() {
  //   if (this.currentPageNumber == this.ukupnoStrana - 1){
  //     return
  //   }
  //   this.currentPageNumber = this.currentPageNumber+1;
  //   this.loadDate();
  // }
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

  izmenaTexta(t){
    this.text = t;
    this.vidljivostTeksta = true;
  }

  ugasiText(){
    this.vidljivostTeksta = false;
    this.text="";
  }

  ugasiKategorije(){
    this.vidljivostKategorije = false;
  }

  otvoriGaleriju(uslov){
    this.slike.forEach((slika, index) => {
      console.log(slika); 
      console.log(index);

      if (slika.namena == uslov){
        this.trazeneSlike.push(slika);
        
      }
  });
    this.slikaUnizu =  0;
  }

  zatvoriGaleriju(){
    this.vidljivostKategorije = true;
    this.vidljivostGalerije = false;
    this.trazeneSlike = new Array();
    this.slikaUnizu = 0;
  }

  sledecaSlika(s){
    if(this.trazeneSlike[this.trazeneSlike.length - 1] == s){
      return
    }else{
      this.slikaUnizu = this.slikaUnizu + 1;
    }
  }

  prethodnaSlika(s){
    if(this.trazeneSlike[0] == s){
      return
    }else{
      this.slikaUnizu = this.slikaUnizu - 1;
    }
  }


}
