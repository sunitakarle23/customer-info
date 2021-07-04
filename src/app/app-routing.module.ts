import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: "full" },
   
  {
    path: 'customer', loadChildren: () => import('./customer/customer.module').then(m =>m.CustomerModule),
  },
  {
    path: 'customer-details', loadChildren: () => import('./customer-details/customer-details.module').then(m => m.CustomerDetailsModule)
  },
  {
    path: 'customer-details/:id', loadChildren: () => import('./customer-details/customer-details.module').then(m => m.CustomerDetailsModule)
  },
  
 // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
