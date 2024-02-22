import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcropComponent } from './addcrop.component';

describe('AddcropComponent', () => {
  let component: AddcropComponent;
  let fixture: ComponentFixture<AddcropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcropComponent]
    });
    fixture = TestBed.createComponent(AddcropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
