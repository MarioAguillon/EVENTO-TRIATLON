import { Component, OnInit, inject } from '@angular/core';
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
  // Forma moderna de inyectar sin constructor
  private dataService = inject(DataService);
  circuitos: any[] = [];

  ngOnInit() {
    // LLAMAMOS AL MÉTODO, NO AL SERVICIO
    this.circuitos = this.dataService.getCircuitos(); 
    console.log("Datos cargados:", this.circuitos); // Revisa esto en la consola F12
  }
}