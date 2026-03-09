import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.html',
  styleUrl: './info.css'
})
export class Info implements OnInit {
  circuitos: any[] = [];

  // Inyectamos el servicio
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // ERROR CORREGIDO: Llamamos al MÉTODO del servicio, no al servicio en sí
    // Asegúrate de que en tu data.service.ts el método se llame getCircuitos()
    this.circuitos = this.dataService.getCircuitos();
  }
}