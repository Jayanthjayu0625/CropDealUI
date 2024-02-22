import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfarmerComponent } from './editfarmer.component';

describe('EditfarmerComponent', () => {
  let component: EditfarmerComponent;
  let fixture: ComponentFixture<EditfarmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditfarmerComponent]
    });
    fixture = TestBed.createComponent(EditfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
