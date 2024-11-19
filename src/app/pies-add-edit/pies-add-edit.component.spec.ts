import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiesAddEditComponent } from './pies-add-edit.component';

describe('PiesAddEditComponent', () => {
  let component: PiesAddEditComponent;
  let fixture: ComponentFixture<PiesAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiesAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
