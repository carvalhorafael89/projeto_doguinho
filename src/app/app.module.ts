import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppDogComponent } from './app-dog/app-dog.component';

import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DogService } from './dog.service';


@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClientModule: HttpClientModule) { }
  
}


@NgModule({
  declarations: [
    AppComponent,
    AppDogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
