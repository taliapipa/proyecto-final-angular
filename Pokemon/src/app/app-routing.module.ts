import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonDetailComponent } from "./pages/pokemon/pokemon-detail/pokemon-detail.component";


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home"},
  { path: "home", component: HomeComponent, pathMatch: "prefix", loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)},
  { path: "form", component: FormComponent},
  { path: "pokemon", component: PokemonComponent},
  { path: "pokemonDetail/:id", component: PokemonDetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
