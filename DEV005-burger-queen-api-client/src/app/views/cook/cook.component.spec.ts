import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CookComponent } from './cook.component';

describe('CookComponent', () => {
  let component: CookComponent;
  let fixture: ComponentFixture<CookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
