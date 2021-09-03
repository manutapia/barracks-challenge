import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonDetails } from 'src/app/interfaces/pokemon-details.interface';
import { Pokemon } from 'src/app/interfaces/pokemon-response';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  urlPokemonSelected: FormControl;
  urlPokemonSprite: string;

  constructor(private _pokemonService: PokemonService) {
    this.urlPokemonSprite = '';
    this.urlPokemonSelected = new FormControl('');
  }

  ngOnInit(): void {
    this._pokemonService.getPokemon().subscribe((pokemon: Pokemon[]) => {
      this.pokemonList = pokemon;
    });
  }

  viewPokemon() {
    this._pokemonService
      .getPokemonDetails(this.urlPokemonSelected.value)
      .subscribe((pokemonDetails) => {
        this.urlPokemonSprite = pokemonDetails.sprites.front_default;
      });
  }
}
