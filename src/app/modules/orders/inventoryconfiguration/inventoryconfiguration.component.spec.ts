import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryconfigurationComponent } from './inventoryconfiguration.component';

describe('InventoryconfigurationComponent', () => {
  let component: InventoryconfigurationComponent;
  let fixture: ComponentFixture<InventoryconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
