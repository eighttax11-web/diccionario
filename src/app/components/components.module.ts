import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { WordsComponent } from './words/words.component';



@NgModule({
  declarations: [
    HomeComponent,
    WordsComponent
  ],
  exports: [
    HomeComponent,
    WordsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
