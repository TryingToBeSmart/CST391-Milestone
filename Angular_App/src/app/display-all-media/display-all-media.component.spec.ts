import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllMediaComponent } from './display-all-media.component';

describe('DisplayAllMediaComponent', () => {
  let component: DisplayAllMediaComponent;
  let fixture: ComponentFixture<DisplayAllMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayAllMediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayAllMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
