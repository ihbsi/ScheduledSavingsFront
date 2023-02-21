import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavModuleComponent } from './sidenav-module.component';

describe('SidenavModuleComponent', () => {
  let component: SidenavModuleComponent;
  let fixture: ComponentFixture<SidenavModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
