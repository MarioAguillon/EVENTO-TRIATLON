import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getCircuitos() {
    return [
      { icono: '🏊', titulo: 'NATACIÓN', desc: '1.5 KM en el mar.' },
      { icono: '🚴', titulo: 'CICLISMO', desc: '40 KM de ruta.' },
      { icono: '🏃', titulo: 'ATLETISMO', desc: '10 KM de trote.' }
    ];
  }
}