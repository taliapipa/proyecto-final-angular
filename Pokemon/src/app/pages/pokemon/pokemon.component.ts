import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Pokemon } from '../../pokemon.models';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  public filterPokemon: Pokemon[];
  public filter: string = '';

  constructor(private serviceService: ServiceService) {
    this.filter = '';
    this.filterPokemon = [];
  }

  
  ngOnInit(): void {
    this.serviceService.getPokemons().subscribe((data: any) => {
      this.pokemons = [...data];
      this.filterPokemon = [...data];
    });
  }

}


