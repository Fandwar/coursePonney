import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesReactiveFormComponent } from './courses-reactive-form.component';

describe('CoursesReactiveFormComponent', () => {
  let component: CoursesReactiveFormComponent;
  let fixture: ComponentFixture<CoursesReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
