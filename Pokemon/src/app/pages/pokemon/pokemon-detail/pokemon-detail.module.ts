import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail.component';

@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PokemonDetailComponent }])
  ]
})
export class PokemonDetailModule { }
