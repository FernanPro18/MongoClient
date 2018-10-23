import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MongoConexionService } from '../../Services/MongoConexion/mongo-conexion.service';
import Conexion from '../../Models/Conexion';
import swal from 'sweetalert';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  Conexiones: Conexion[];

  constructor(private _Router: Router, private _Conexion: MongoConexionService) {
    this._Router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (this._Router.url == '/Inicio') {
          this.Conexiones = this._Conexion.RetornarConexiones();
        }
      }
    });
  }

  ngOnInit() {
    this.Conexiones = this._Conexion.RetornarConexiones();
  }

  Agregar(): void {
    this._Router.navigate(['/Agregar']);
  }

  EliminarConexion(index: number): void {
    swal({
      title: '¿Esta seguro de querer eliminar esta conexión?',
      icon: 'warning',
      buttons: ['Cancelar', 'Eliminar'],
      dangerMode: true
    }).then(value => {
      if (value) {
        this.Conexiones = this._Conexion.EliminarConexion(index);
      }
    })
  }

}
