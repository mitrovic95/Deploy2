import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { PredstavaOsoba } from 'src/app/model/predstavaOsoba';
import { PredstavaOsobeService } from 'src/app/services/predstava-osobe.service';
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

  constructor(private predstavaOsobeItemService: PredstavaOsobeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadData();

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

}
