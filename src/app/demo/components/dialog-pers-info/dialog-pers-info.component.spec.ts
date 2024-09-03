import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPersInfoComponent } from './dialog-pers-info.component';

describe('DialogPersInfoComponent', () => {
  let component: DialogPersInfoComponent;
  let fixture: ComponentFixture<DialogPersInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogPersInfoComponent]
    });
    fixture = TestBed.createComponent(DialogPersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
