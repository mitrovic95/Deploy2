import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredstavaOsobeItemComponent } from './predstava-osobe-item.component';

describe('PredstavaOsobeItemComponent', () => {
  let component: PredstavaOsobeItemComponent;
  let fixture: ComponentFixture<PredstavaOsobeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredstavaOsobeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredstavaOsobeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
