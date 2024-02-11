import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToUserListButtonComponent } from './add-to-user-list-button.component';

describe('AddToUserListButtonComponent', () => {
  let component: AddToUserListButtonComponent;
  let fixture: ComponentFixture<AddToUserListButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddToUserListButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddToUserListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
