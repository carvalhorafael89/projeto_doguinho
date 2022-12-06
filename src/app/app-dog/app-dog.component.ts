import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { dog } from '../dog-interface';

@Component({
  selector: 'app-app-dog',
  templateUrl: './app-dog.component.html',
  styleUrls: ['./app-dog.component.css']
})

export class AppDogComponent implements OnInit {

  constructor(private _DogService: DogService) {
  }

  dogs?: dog;

  ngOnInit(): void {
  }

    getDog(): void {
      this._DogService.getDog()
      .subscribe(data => this.dogs = data)

  }
}