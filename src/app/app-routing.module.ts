import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'account/login', component: LoginComponent },
  {
    path: 'account/data',
    loadChildren: () =>
      import('./pages/data/data.module').then((m) => m.DataModule),
    canLoad: [AuthGuard],
  },
  { path: '**', redirectTo: 'account/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
