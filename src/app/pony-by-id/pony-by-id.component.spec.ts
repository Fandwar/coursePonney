import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyByIdComponent } from './pony-by-id.component';

describe('PonyByIdComponent', () => {
  let component: PonyByIdComponent;
  let fixture: ComponentFixture<PonyByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonyByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonyByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
