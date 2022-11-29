import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDogComponent } from './app-dog.component';

describe('AppDogComponent', () => {
  let component: AppDogComponent;
  let fixture: ComponentFixture<AppDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
