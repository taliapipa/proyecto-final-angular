import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../../../pokemon.models';

@Pipe({
  name: 'filterNames'
})
export class FilterNamesPipe implements PipeTransform {
  
  transform(list: Pokemon[], filter: string = ''): Pokemon[] {
    const lowerCaseFilter: string = filter.toLowerCase().trim();

    const filterPokemon: Pokemon[] = list.filter((pokemon: Pokemon) => {
      return pokemon.name.toLowerCase().includes(lowerCaseFilter);
    });

    console.log(list, filter);

    return filterPokemon;

  }
}
