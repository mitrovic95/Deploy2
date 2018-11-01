import { Component, OnInit } from '@angular/core';
import { Vesti } from 'src/app/model/vesti';
import { VestiService } from 'src/app/services/vesti.service';

@Component({
  selector: 'app-vesti',
  templateUrl: './vesti.component.html',
  styleUrls: ['./vesti.component.css']
})
export class VestiComponent implements OnInit {

  public vesti: Vesti[];
  public vest: Vesti;
  public id?: number;

  constructor (private vestiService: VestiService) { }

  ngOnInit() {
    this.vestiService.getVesti().subscribe((vesti) => {
      this.vesti = vesti;
    });
    this.vestiService.getVesti();
    // this.vestiService.vesti.subscribe(data => console.log(data));

  }

}
