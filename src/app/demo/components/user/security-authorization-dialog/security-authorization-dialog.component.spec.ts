import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAuthorizationDialogComponent } from './security-authorization-dialog.component';

describe('SecurityAuthorizationDialogComponent', () => {
  let component: SecurityAuthorizationDialogComponent;
  let fixture: ComponentFixture<SecurityAuthorizationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityAuthorizationDialogComponent]
    });
    fixture = TestBed.createComponent(SecurityAuthorizationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
