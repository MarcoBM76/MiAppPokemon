import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

    private apiUrl = 'https://pokeapi.co/api/v2/';
  constructor( private http: HttpClient) { 
  
  }
  getPokemon(id: string): Observable<any> {
    // Obtiene la información de un pokemon específico por su ID o nombre
    const url = `${this.apiUrl}pokemon/${id}`;
    return this.http.get<any>(url);
  }
}
