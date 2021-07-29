import { HotelListComponent } from './components/hotel-list/hotel-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HotelDetailComponent } from './components/hotel-list/hotel-detail/hotel-detail.component';
import { HotelDetailGuard } from './components/hotel-list/hotel-detail.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'hotels/:id', component: HotelDetailComponent,
    canActivate: [HotelDetailGuard]
  },
  { path: 'hotels', component: HotelListComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
