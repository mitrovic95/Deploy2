import { Component, OnInit } from '@angular/core';
import { Osoba } from 'src/app/model/osoba';
import { OsobeService } from 'src/app/services/osobe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-osobe-item',
  templateUrl: './osobe-item.component.html',
  styleUrls: ['./osobe-item.component.css']
})
export class OsobeItemComponent implements OnInit {

  public osobe: any;

  public osoba: Osoba;
  public id: number;
  public isDataAvailable: boolean;
  public imgVersion = 1;

  constructor(private osobeItemService: OsobeService, private route: ActivatedRoute) { }

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
    this.osobeItemService.getOsobeId(this.id)
    .subscribe(
      (data) => {
        this.osobe = data;
        console.log(data);
        // tslint:disable-next-line:no-unused-expression
        this.isDataAvailable;
      }
    );
  }
}
