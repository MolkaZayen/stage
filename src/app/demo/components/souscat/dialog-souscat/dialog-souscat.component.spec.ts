import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSouscatComponent } from './dialog-souscat.component';

describe('DialogSouscatComponent', () => {
  let component: DialogSouscatComponent;
  let fixture: ComponentFixture<DialogSouscatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSouscatComponent]
    });
    fixture = TestBed.createComponent(DialogSouscatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
