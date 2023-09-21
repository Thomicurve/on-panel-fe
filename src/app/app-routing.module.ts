import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'on-panel',
    loadChildren: () => import('./features/on-panel/on-panel.module').then((m) => m.OnPanelModule)
  },
  { 
    path: '', 
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
