import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFormsComponent } from './main-forms.component';

describe('MainFormsComponent', () => {
  let component: MainFormsComponent;
  let fixture: ComponentFixture<MainFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
