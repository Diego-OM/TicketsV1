import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsmodalComponent } from './ticketsmodal.component';

describe('TicketsmodalComponent', () => {
  let component: TicketsmodalComponent;
  let fixture: ComponentFixture<TicketsmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
