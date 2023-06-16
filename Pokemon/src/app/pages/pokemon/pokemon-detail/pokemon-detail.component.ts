import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon.models';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {

  id!: number;
  pokemon!: Pokemon;

  constructor(private serviceService: ServiceService, private activatedRoute:ActivatedRoute, private router: Router,){}
  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe(params=> {
      this.id = Number(params.get("id"))
    })
    this.serviceService.getPokemon(this.id).subscribe((data:any)=>{
      //console.log(data);
      this.pokemon = data;
    })
  }
  deletePokemon(){
    this.serviceService.deletePokemon(this.id).subscribe((data:any)=>{
      alert("pokemon eliminado")
      this.router.navigate(["/pokemon"])
    })
  }
}
