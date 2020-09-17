import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelGraficosComponent } from './panel-graficos.component';

describe('PanelGraficosComponent', () => {
  let component: PanelGraficosComponent;
  let fixture: ComponentFixture<PanelGraficosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelGraficosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
