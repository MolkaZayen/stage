import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoDialogComponent } from './personal-info-dialog.component';

describe('PersonalInfoDialogComponent', () => {
  let component: PersonalInfoDialogComponent;
  let fixture: ComponentFixture<PersonalInfoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInfoDialogComponent]
    });
    fixture = TestBed.createComponent(PersonalInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
