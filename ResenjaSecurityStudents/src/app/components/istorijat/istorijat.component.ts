import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { IstorijatService } from 'src/app/services/istorijat.service';
import { Istorijat } from 'src/app/model/istorijat';

@Component({
  selector: 'app-istorijat',
  templateUrl: './istorijat.component.html',
  styleUrls: ['./istorijat.component.css']
})
export class IstorijatComponent implements OnInit {

  public istorijats: Istorijat[];
  public istorijat: Istorijat;
  public id?: number;

  constructor (private istorijatService: IstorijatService) { }

  ngOnInit() {
    this.istorijatService.getIstorijat().subscribe((istorijats) => {
      this.istorijats = istorijats;
    });
    this.istorijatService.getIstorijat();
    // this.istorijatService.istorijats.subscribe(data => console.log(data));

  }
}
