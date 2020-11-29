import { WebContainerComponent } from './web-container/web-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {MatCardModule} from '@angular/material/card';

const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  declarations: [HomeComponent, WebContainerComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    MatCardModule
  ],
  exports: [RouterModule, WebContainerComponent]

})
export class BroBeansModule { }
