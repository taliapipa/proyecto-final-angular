import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon.models';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private db_url = "http://localhost:3000/pokemon";

  constructor(private http: HttpClient) {}

  public pokemonData ={
    id: "",
    num: "",
    name: "",
    img: "",
    type: "",
  }

  getPokemons(): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.db_url);
  }

  getPokemon(id: number){
    return this.http.get(`${this.db_url}/${id}`)
  }

  deletePokemon(id: number){
    return this.http.delete(`${this.db_url}/${id}`)
  }

  postPokemon(pokemon: any){
    return this.http.post(this.db_url, pokemon)
  }
}
