import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProddescriptionComponent } from './proddescription.component';

describe('ProddescriptionComponent', () => {
  let component: ProddescriptionComponent;
  let fixture: ComponentFixture<ProddescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProddescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProddescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
