import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { WordsComponent } from './words/words.component';
import { WordComponent } from './word/word.component';
import { CameraComponent } from './camera/camera.component';



@NgModule({
  declarations: [
    HomeComponent,
    WordsComponent,
    WordComponent,
    CameraComponent
  ],
  exports: [
    HomeComponent,
    WordsComponent,
    WordComponent,
    CameraComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
