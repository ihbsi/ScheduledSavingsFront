import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSavingsComponent } from './schedule-savings.component';

describe('ScheduleSavingsComponent', () => {
  let component: ScheduleSavingsComponent;
  let fixture: ComponentFixture<ScheduleSavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleSavingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScheduleSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
