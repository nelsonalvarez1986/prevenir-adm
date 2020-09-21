import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaBarriosComponent } from './tabla-barrios.component';

describe('TablaBarriosComponent', () => {
  let component: TablaBarriosComponent;
  let fixture: ComponentFixture<TablaBarriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaBarriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaBarriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
