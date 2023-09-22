import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


  imagenWidth:number=50;
  imagenMargin:number=2;
  muestraImg:boolean=true;
  listFiler:string='';

  productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "year":"febrero 3 2020",
      "precio": 120000,
      "Marca":"NISSAN",
      "Color":"Verde",
      "ImagenURL":"https://wieck-nissanao-production.s3.amazonaws.com/photos/66cb2727ffa55918878048bc9071e730749b4cb0/preview-928x522.jpg"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"2 puertas",
      "year":"marzo 5 2022",
      "precio": 180000,
      "Marca":"Audi",
      "Color":"Blanco",
      "ImagenURL":"https://img.remediosdigitales.com/d46bf6/audi-a4-2020-precio-mexico_/840_560.jpg"

    },
    {

      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas",
      "year":"Enero 2 2023",
      "precio": 200000,
      "Marca":"Kia",
      "Color":"Azul",
      "ImagenURL":"https://cdn.milenio.com/uploads/media/2020/03/14/exito-kia-motors-mexico-calidad_0_1_958_596.jpg"
  
    }
  
  ]


}
