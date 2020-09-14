import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaCantidadComponent } from './estadistica-cantidad.component';

describe('EstadisticaCantidadComponent', () => {
  let component: EstadisticaCantidadComponent;
  let fixture: ComponentFixture<EstadisticaCantidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaCantidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaCantidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
