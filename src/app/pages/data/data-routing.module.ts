import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data.component';
import { NasaComponent } from './nasa/nasa.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: DataComponent,
    children: [
      {
        path: 'nasa',
        component: NasaComponent,
      },
      {
        path: 'pokemon',
        component: PokemonComponent,
      },
      {
        path: '',
        redirectTo: 'nasa',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataRoutingModule {}
