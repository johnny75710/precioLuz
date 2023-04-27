import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogedPricesComponent } from './loged-prices.component';

describe('LogedPricesComponent', () => {
  let component: LogedPricesComponent;
  let fixture: ComponentFixture<LogedPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogedPricesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogedPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
