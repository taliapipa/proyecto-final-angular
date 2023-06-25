import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon.component';
import { FormsModule } from '@angular/forms';
import { AppPipesModule } from 'src/app/shared/pipes/app-pipes/app-pipes.module';



@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PokemonComponent }]),
    FormsModule,
    AppPipesModule
  ],
  exports: [
  ]
})
export class PokemonModule { }
