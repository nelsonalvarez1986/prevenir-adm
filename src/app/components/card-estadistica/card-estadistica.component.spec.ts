import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEstadisticaComponent } from './card-estadistica.component';

describe('CardEstadisticaComponent', () => {
  let component: CardEstadisticaComponent;
  let fixture: ComponentFixture<CardEstadisticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEstadisticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEstadisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
