import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogqComponent } from './dialogq.component';

describe('DialogqComponent', () => {
  let component: DialogqComponent;
  let fixture: ComponentFixture<DialogqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogqComponent]
    });
    fixture = TestBed.createComponent(DialogqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
