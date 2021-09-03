import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { NasaComponent } from './nasa/nasa.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DataComponent, NasaComponent, PokemonComponent],
  imports: [
    CommonModule,
    DataRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
})
export class DataModule {}
