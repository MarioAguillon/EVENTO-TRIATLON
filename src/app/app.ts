import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// IMPORTANTE: Rutas exactas a tus carpetas y nombres de archivos
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { Info } from './components/info/info';
import { Agenda } from './components/agenda/agenda';
import { Registro } from './components/registro/registro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    NavbarComponent, 
    HeroComponent, 
    Info, 
    Agenda, 
    Registro
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'evento-triatlon';
}