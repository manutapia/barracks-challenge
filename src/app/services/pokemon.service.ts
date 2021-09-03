import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PokemonDetails } from '../interfaces/pokemon-details.interface';
import { Pokemon, PokemonResponse } from '../interfaces/pokemon-response';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemon(): Observable<Pokemon[]> {
    return this.http
      .get<PokemonResponse>(`${environment.POKEMON_URL_API}/pokemon`)
      .pipe(
        map((response) => {
          return response.results;
        })
      );
  }

  getPokemonDetails(url: string): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(url)
      .pipe(map((details: PokemonDetails) => details));
  }
}
