import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongoColeccionService {

  UrlBase: string = 'https://mongoclient.herokuapp.com/';

  constructor(private Http: HttpClient) { }

  Listar(Url: string): any {
    return this.Http.get(this.UrlBase + 'Colecciones', { headers: new HttpHeaders().set('url', Url)}).toPromise();
  }
}