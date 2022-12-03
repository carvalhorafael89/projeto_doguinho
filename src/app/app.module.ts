import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppDogComponent } from './app-dog/app-dog.component';
import { DogImgComponent } from './dog-img/dog-img.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDogComponent,
    DogImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
