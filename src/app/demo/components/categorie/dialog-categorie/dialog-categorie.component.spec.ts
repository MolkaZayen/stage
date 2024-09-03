import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCategorieComponent } from './dialog-categorie.component';

describe('DialogCategorieComponent', () => {
  let component: DialogCategorieComponent;
  let fixture: ComponentFixture<DialogCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCategorieComponent]
    });
    fixture = TestBed.createComponent(DialogCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
