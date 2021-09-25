import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadinventoryComponent } from './uploadinventory.component';

describe('UploadinventoryComponent', () => {
  let component: UploadinventoryComponent;
  let fixture: ComponentFixture<UploadinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
