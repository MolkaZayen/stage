import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlisteComponent } from './qliste.component';

describe('QlisteComponent', () => {
  let component: QlisteComponent;
  let fixture: ComponentFixture<QlisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QlisteComponent]
    });
    fixture = TestBed.createComponent(QlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
