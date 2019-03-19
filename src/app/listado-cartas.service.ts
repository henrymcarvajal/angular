import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ListaCartas } from './cartas-patrocinio/listado-cartas'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ListadoCartasService {

  private cartasUrl = 'api/listaCartas/';

  constructor(private http: HttpClient) { }

  getListaCartas(id: string): Observable<ListaCartas> {
    console.error(id);  
    const url = this.cartasUrl + id;
    console.error(url); 
    return this.http.get<ListaCartas>(url).pipe(
      tap(_ => this.log(`fetched listaCartas id=${id}`)),
      catchError(this.handleError<ListaCartas>(`getListaCartas id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  private log(message: string) {
    console.error(`ListadoCartasService: ${message}`);
  }
}
