import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokedex } from '../pokemon.models';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private db_url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150";

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokedex> {
    return this.http.get<Pokedex>(this.db_url);
  }

  getPokemonById(id: string): Observable<Pokedex> {
    return this.http.get<Pokedex>(`${this.db_url}/${id}`);
  }
}
