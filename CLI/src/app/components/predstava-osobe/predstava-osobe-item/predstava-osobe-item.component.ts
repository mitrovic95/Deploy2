import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { PredstavaOsoba } from 'src/app/model/predstavaOsoba';
import { PredstavaOsobeService } from 'src/app/services/predstava-osobe.service';

import { Slike } from 'src/app/model/slike';
import { SlikeService } from 'src/app/services/slike.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-predstava-osobe-item',
  templateUrl: './predstava-osobe-item.component.html',
  styleUrls: ['./predstava-osobe-item.component.css']
})
export class PredstavaOsobeItemComponent implements OnInit {

  public predstavaOsobe: any;

  public osoba: PredstavaOsoba;
  public id: number;
  public isDataAvailable: boolean;

  //slike
  public slike: Slike[];
  public trazeneSlike: Slike[] = new Array();
  public slikaUnizu: number;
  public slika: Slike;
  public brojSlike: number;

  constructor(private slikeService: SlikeService,  private predstavaOsobeItemService: PredstavaOsobeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadData();
    this.loadPhotos();
    this.brojSlike = 0;

  }
   
  loadData() {
    this.route.params
    .subscribe(
      (params) => {
        this.isDataAvailable = false;
        this.id = +params['id'];
      }
    );
    this.predstavaOsobeItemService.getPredstavaOsobeId(this.id)
    .subscribe(
      (data) => {
        this.predstavaOsobe = data;
        console.log(data);
        // tslint:disable-next-line:no-unused-expression
        this.isDataAvailable;
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

  provera(x, y){
    if (x == y){
      this.brojSlike = this.brojSlike + 1;
      if(this.brojSlike < 5){
        return true
      }else{
        return false
      }
    }else{
      return false
    }

  }

 

}
