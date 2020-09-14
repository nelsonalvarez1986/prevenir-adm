import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaSimpleComponent } from './busqueda-simple.component';

describe('BusquedaSimpleComponent', () => {
  let component: BusquedaSimpleComponent;
  let fixture: ComponentFixture<BusquedaSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
