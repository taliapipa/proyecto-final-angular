import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
  { path: 'pokemon', loadChildren: () => import('./pages/pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: 'pokemonDetail/:id', loadChildren: () => import('./pages/pokemon/pokemon-detail/pokemon-detail.module').then(m => m.PokemonDetailModule) },
  { path: 'about-me', loadChildren: () => import('./pages/about-me/about-me.module').then(m => m.AboutMeModule)},
  { path: '**', loadChildren: ()=>  import('src/app/pages/not-found/not-found/not-found.module').then(m => m.NotFoundModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
