import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmuerzoComponent } from './almuerzo.component';

describe('AlmuerzoComponent', () => {
  let component: AlmuerzoComponent;
  let fixture: ComponentFixture<AlmuerzoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlmuerzoComponent]
    });
    fixture = TestBed.createComponent(AlmuerzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
