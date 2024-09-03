import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlistComponent } from './testlist.component';

describe('TestlistComponent', () => {
  let component: TestlistComponent;
  let fixture: ComponentFixture<TestlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestlistComponent]
    });
    fixture = TestBed.createComponent(TestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
