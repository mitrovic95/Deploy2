import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredstavaOsobeComponent } from './predstava-osobe.component';

describe('PredstavaOsobeComponent', () => {
  let component: PredstavaOsobeComponent;
  let fixture: ComponentFixture<PredstavaOsobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredstavaOsobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredstavaOsobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
