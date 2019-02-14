import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominateSomeoneComponent } from './nominate-someone.component';

describe('NominateSomeoneComponent', () => {
  let component: NominateSomeoneComponent;
  let fixture: ComponentFixture<NominateSomeoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominateSomeoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominateSomeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
