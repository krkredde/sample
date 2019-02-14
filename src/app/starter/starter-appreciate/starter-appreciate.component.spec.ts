import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterAppreciateComponent } from './starter-appreciate.component';

describe('StarterAppreciateComponent', () => {
  let component: StarterAppreciateComponent;
  let fixture: ComponentFixture<StarterAppreciateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterAppreciateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterAppreciateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
