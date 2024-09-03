import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouslisteComponent } from './sousliste.component';

describe('SouslisteComponent', () => {
  let component: SouslisteComponent;
  let fixture: ComponentFixture<SouslisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SouslisteComponent]
    });
    fixture = TestBed.createComponent(SouslisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
