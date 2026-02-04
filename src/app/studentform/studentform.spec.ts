import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentform } from './studentform';

describe('Studentform', () => {
  let component: Studentform;
  let fixture: ComponentFixture<Studentform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studentform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
