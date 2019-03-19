import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { CARTA_SP_DATA, CARTA_EN_DATA, CARTA_FR_DATA, CARTA_IT_DATA, CARTA_GE_DATA } from './cartas-patrocinio/listado-cartas';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const listaCartas = [
      { id: 'SP', values: CARTA_SP_DATA },
      { id: 'EN', values: CARTA_EN_DATA },
      { id: 'FR', values: CARTA_FR_DATA },
      { id: 'IT', values: CARTA_IT_DATA },
      { id: 'GE', values: CARTA_GE_DATA }
    ];
    return { listaCartas };
  }

  constructor() { }
}
