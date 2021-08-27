import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unit } from 'src/app/models/unit.model';
import { UnitService } from 'src/app/services/unit.service';


@Component({
  selector: 'app-unit-info',
  templateUrl: './unit-info.page.html',
  styleUrls: ['./unit-info.page.scss'],
})
export class UnitInfoPage implements OnInit {

  loadedUnit: Unit;

  constructor(
    private activatedRoute: ActivatedRoute,
    private unitService: UnitService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('unitId')){
        // redirect user
        return;
      }
      const unitId = paramMap.get('unitId');
      this.loadedUnit = this.unitService.getUnit(unitId);

    });
  }

}
