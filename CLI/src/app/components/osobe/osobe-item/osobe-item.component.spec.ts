import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobeItemComponent } from './osobe-item.component';

describe('OsobeItemComponent', () => {
  let component: OsobeItemComponent;
  let fixture: ComponentFixture<OsobeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsobeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsobeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
