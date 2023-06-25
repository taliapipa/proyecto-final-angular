import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  pokemonForm!: FormGroup;

  constructor( private formBuilder: FormBuilder, private router: Router, private pokemonService: ServiceService){}

  public newPokemon = this.pokemonService.pokemonData;
  public newPokemonId = this.pokemonService.pokemonData.id;

  ngOnInit():void {
    this.pokemonForm = this.formBuilder.group({
      name: [
        this.newPokemon.name,
        [Validators.required, Validators.minLength(1)]
      ],
      id: [
        this.newPokemon.id,
        [Validators.required, Validators.minLength(1)]
      ],
      img: [
        this.newPokemon.img,
        [Validators.required, Validators.minLength(1)]
      ],
      num: [
        this.newPokemon.num,
        [Validators.required, Validators.minLength(1)]
      ],
      type: [
        this.newPokemon.type,
        [Validators.required, Validators.minLength(1)]
      ]
    })  
    this.pokemonForm.valueChanges.subscribe((changes)=>{
      this.newPokemon = changes;
    })
  }
  onSubmit(){
    this.pokemonService.postPokemon(this.newPokemon).subscribe();
    this.pokemonForm.reset();
  }
}
