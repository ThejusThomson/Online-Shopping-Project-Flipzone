import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtopwearComponent } from './wtopwear.component';

describe('WtopwearComponent', () => {
  let component: WtopwearComponent;
  let fixture: ComponentFixture<WtopwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WtopwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtopwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
