import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCompteComponent } from './dialog-compte.component';

describe('DialogCompteComponent', () => {
  let component: DialogCompteComponent;
  let fixture: ComponentFixture<DialogCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCompteComponent]
    });
    fixture = TestBed.createComponent(DialogCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
