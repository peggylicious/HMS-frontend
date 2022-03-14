import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    ReactiveFormsModule, 
    CoreModule
  ]
})
export class HomeModule { }
