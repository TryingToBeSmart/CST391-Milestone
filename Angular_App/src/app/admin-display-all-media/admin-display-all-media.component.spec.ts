import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayAllMediaComponent } from './admin-display-all-media.component';

describe('AdminDisplayAllMediaComponent', () => {
  let component: AdminDisplayAllMediaComponent;
  let fixture: ComponentFixture<AdminDisplayAllMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDisplayAllMediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDisplayAllMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
