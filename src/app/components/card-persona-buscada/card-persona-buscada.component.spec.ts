import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonaBuscadaComponent } from './card-persona-buscada.component';

describe('CardPersonaBuscadaComponent', () => {
  let component: CardPersonaBuscadaComponent;
  let fixture: ComponentFixture<CardPersonaBuscadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPersonaBuscadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPersonaBuscadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
