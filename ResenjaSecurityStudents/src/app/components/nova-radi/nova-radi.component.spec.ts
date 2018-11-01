import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaRadiComponent } from './nova-radi.component';

describe('NovaRadiComponent', () => {
  let component: NovaRadiComponent;
  let fixture: ComponentFixture<NovaRadiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaRadiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaRadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
