import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  pokemons: any[] = [];

  constructor(private service: ServiceService) {
    this.getPokemons();
  }

  getPokemons() {
    this.service.getPokemons().subscribe((data: any) => {
      this.pokemons = data.results;
    });
  }
}
