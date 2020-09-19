import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSeguimientoComponent } from './listado-seguimiento.component';

describe('ListadoSeguimientoComponent', () => {
  let component: ListadoSeguimientoComponent;
  let fixture: ComponentFixture<ListadoSeguimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoSeguimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
