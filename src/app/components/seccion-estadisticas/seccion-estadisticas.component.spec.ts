import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionEstadisticasComponent } from './seccion-estadisticas.component';

describe('SeccionEstadisticasComponent', () => {
  let component: SeccionEstadisticasComponent;
  let fixture: ComponentFixture<SeccionEstadisticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionEstadisticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionEstadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
