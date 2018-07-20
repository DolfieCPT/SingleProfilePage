import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestservicesComponent } from './requestservices.component';

describe('RequestservicesComponent', () => {
  let component: RequestservicesComponent;
  let fixture: ComponentFixture<RequestservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
