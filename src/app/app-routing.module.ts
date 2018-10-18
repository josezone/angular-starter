import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';

const routes: Routes = [
  // {
  //   path: '**',
  //   redirectTo: 'not-found'
  // },
  // {
  //   path: 'not-found',
  //   loadChildren: './pages/not-found/not-found.module#NotFoundModule'
  // },
  {
    path: '',
    pathMatch: 'full',
    component: AppShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
