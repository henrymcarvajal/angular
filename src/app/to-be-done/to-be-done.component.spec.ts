import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBeDoneComponent } from './to-be-done.component';

describe('ToBeDoneComponent', () => {
  let component: ToBeDoneComponent;
  let fixture: ComponentFixture<ToBeDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToBeDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBeDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
