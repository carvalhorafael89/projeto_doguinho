import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { dog } from './dog-interface';


@Injectable({
  providedIn: 'root'
})
export class DogService {

  private url = 'https://dog.ceo/api/breeds/image/random';
  


  constructor(private http: HttpClient) { }

  getDog(): Observable<dog> {
    return this.http.get<dog>(this.url);
  }
}