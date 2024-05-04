import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendinquiriesComponent } from './sendinquiries.component';

describe('SendinquiriesComponent', () => {
  let component: SendinquiriesComponent;
  let fixture: ComponentFixture<SendinquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendinquiriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendinquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
