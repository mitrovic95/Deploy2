import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronadjenaStranaComponent } from './pronadjena-strana.component';

describe('PronadjenaStranaComponent', () => {
  let component: PronadjenaStranaComponent;
  let fixture: ComponentFixture<PronadjenaStranaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronadjenaStranaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronadjenaStranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
