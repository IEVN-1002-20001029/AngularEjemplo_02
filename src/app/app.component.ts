import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEjemplo_02';

  duplicarNumero(n:number):number{
    return n*2;
  }

  pelicula={
    titulo:'Cantnflas show',
    fechadelanzamiento:new Date(),
    precio : 21
  }

}
