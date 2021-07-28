import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {

  center = {lat:25, lng:12};
  zoom = 15;

  constructor() { }

  ngOnInit(): void {
    //alert("Hola desde el init");
    this.zoom = 8;
    navigator.geolocation.getCurrentPosition((posicion)=>{

      //Para recuperar una vez convertido a JSON
      //Asi no lo podriamos usar, de momento lo recuperamos
      var objeto = localStorage.getItem("posicion");
      //esto es la operacion inversa pasar de objetoJSOn a objeto que podemos usar
      //debemoms comprobar antes de hacer el parse que no sea null
      console.log(objeto);
      if(objeto!=null)
      {
        var posicionJSON = JSON.parse(objeto);
      }
      console.log(posicionJSON.lat);

      if((posicionJSON.lat!=posicion.coords.latitude) || (posicionJSON.lng!=posicion.coords.longitude))
      {
        alert("Has cambiado de posicion");
      }

      var posicion2 = {
        lat: posicion.coords.latitude,
        lng: posicion.coords.latitude
      }

      //primera opcion es convertir a string
      localStorage.setItem("lat", posicion.coords.latitude.toString());
      localStorage.setItem("lng", posicion.coords.longitude.toString());

      //segunda opcion podemos convertir todo el objeto a JSON
      //y trabajar con el directamente
      localStorage.setItem("posicion", JSON.stringify(posicion2));
      console.log(posicion2);
      console.log(JSON.stringify(posicion2));





      this.center = {
        lat: posicion.coords.latitude,
        lng: posicion.coords.longitude
      }

    },
    (error) => {
      alert("Se ha producido un error");
    });
  }

}
