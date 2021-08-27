import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/models/unit.model';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.page.html',
  styleUrls: ['./unit-list.page.scss'],
})
export class UnitListPage implements OnInit {

  units: Unit[];

  constructor(private unitService: UnitService) { }

  ngOnInit() {
    this.units = this.unitService.getAllUnits();
  }

}
