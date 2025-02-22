import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankruptcyComponent } from './bankruptcy.component';

describe('MainComponent', () => {
  let component: BankruptcyComponent;
  let fixture: ComponentFixture<BankruptcyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankruptcyComponent]
    });
    fixture = TestBed.createComponent(BankruptcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
