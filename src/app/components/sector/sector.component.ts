import { Component, OnInit } from '@angular/core';
import {
  acknowledgement,
  priority,
  sector,
  subSectorAdmin,
  subSectorAlimento,
  subSectorManu,
  subSectorMedioAmb,
  subSectorPeda,
  subSectorTecInfo,
} from 'src/app/interfaces/menuOptions';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss'],
})
export class SectorComponent implements OnInit {
  sectorMenu = sector;
  subSectorMenu = [];
  prioriryMenu = priority;
  acknowledgeMenu = acknowledgement;

  constructor() {}

  ngOnInit() {}

  handleSector(e) {
    if (e.target.value === 'Administración') {
      this.subSectorMenu = subSectorAdmin;
    } else if (e.target.value === 'Alimentos') {
      this.subSectorMenu = subSectorAlimento;
    } else if (e.target.value === 'Manufactura') {
      this.subSectorMenu = subSectorManu;
    } else if (e.target.value === 'Medio Ambiente') {
      this.subSectorMenu = subSectorMedioAmb;
    } else if (e.target.value === 'Pedagogía') {
      this.subSectorMenu = subSectorPeda;
    } else if (
      e.target.value === 'Tecnologías de la Información y Comunicaciones'
    ) {
      this.subSectorMenu = subSectorTecInfo;
    }
  }

  handleSubSector(e) {}
}
