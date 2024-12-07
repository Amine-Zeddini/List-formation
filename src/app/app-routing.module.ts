import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionItemListComponent } from './session-item-list/session-item-list.component'; 

const routes: Routes = [
  { path: 'sessions', component: SessionItemListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
