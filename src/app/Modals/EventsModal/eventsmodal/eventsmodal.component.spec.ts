import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsmodalComponent } from './eventsmodal.component';

describe('EventsmodalComponent', () => {
  let component: EventsmodalComponent;
  let fixture: ComponentFixture<EventsmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
