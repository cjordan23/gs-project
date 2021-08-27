/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Unit } from '../models/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

 private units: Unit[] = [
    {
      unitId : '1',
      unitName : 'Berwick',
      unitType : 'Fire, Demon',
      unitTrueArt : 'For 180s, enter Magia Drive. During Magia Drive: 37000% Fire DMG (MAG). For 15s, increase Allies DMG by 50%, for Fire Allies, increase DMG by 100% instead. ',
      unitTABreak : '4000',
      unitArt : '14400% Fire DMG (MAG). Increase Allies Arts by 25 + For 10s, increase Fire Allies Arts by 2/s. ',
      unitArtBreak : '2100',
      unitSkill : '8s CT - 2200% Fire DMG (MAG). Chance to inflict Burn',
      unitSkillBreak : '1000',
      unitIconUrl : 'https://static.wikia.nocookie.net/grandsummoners_gamepedia_en/images/7/70/Berwick_Icon.png',
      unitImageUrl : 'https://i.imgur.com/Io6fC3s.png',
      unitDesc : '',
    },
    // {
    //   unitId : '2',
    //   unitName : 'Swordsman Berwick',
    //   unitType : 'Fire, Demon',
    //   unitTrueArt : '',
    //   unitArt : '',
    //   unitSkill : '',
    //   unitIconUrl : 'https://static.wikia.nocookie.net/grandsummoners_gamepedia_en/images/2/25/Swordsman_Berwick_Icon.png',
    //   unitImageUrl : 'https://static.wikia.nocookie.net/grandsummoners_gamepedia_en/images/5/5e/Awoken_Swordsman_Berwick_Full_Art.png',
    //   unitDesc : '',
    // },

  ];

  constructor() { }

  getAllUnits(){
    return [...this.units];
  }

  getUnit(unitId: string) {
    return {
      // eslint-disable-next-line arrow-body-style
      ...this.units.find(units => {
        return units.unitId === unitId;
      })
    };
  }
}
