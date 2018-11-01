

  import { Component, OnInit } from '@angular/core';
  import { Osoba } from 'src/app/model/osoba';
  import { OsobeService } from 'src/app/services/osobe.service';
  
  @Component({
    selector: 'app-osobe',
    templateUrl: './osobe.component.html',
    styleUrls: ['./osobe.component.css']
  })
  export class OsobeComponent implements OnInit {
  
    public osobe: Osoba[];
    public osoba: Osoba;
    public id?: number;
    public currentPageNumber: number;
    // tslint:disable-next-line:no-inferrable-types
    public sizePage: number = 6;
    public imgVersion = 1;
    
    // public repertoars: Repertoar[];
    public ukupnoRepertoara: number;
    public ukupnoStrana: number;
    public ukupnoStranaNiz: any[];
    // public repertoar: Repertoar;
    // public id?: number;
  
    constructor(private osobeService: OsobeService) { }
  
    ngOnInit() {
      this.currentPageNumber = 0;
      this.loadDate();
  
    }
  
    loadDate() {
      this.osobeService.getOsoba(this.currentPageNumber, this.sizePage)
      .subscribe(
        (data) => { this.osobe = data.body;
                    this.ukupnoRepertoara = + data.headers.get('X-Total-Count');
                    this.ukupnoStrana = Math.ceil(this.ukupnoRepertoara / this.sizePage);
                    this.ukupnoStranaNiz = Array(this.ukupnoStrana).fill(4);
                    console.log(this.ukupnoStranaNiz);
                  }
      );
    }
  
    delete(index: number) {
      console.log(this.osobe[index]);
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
    //   this.osobaService.getOsobe().subscribe((osobe) => {
    //     this.osobe = osobe;
    //   });
    //   this.osobaService.getOsobe();
    //   this.osobaService.osobe.subscribe(data => console.log(data));
  
    // }
  }
  