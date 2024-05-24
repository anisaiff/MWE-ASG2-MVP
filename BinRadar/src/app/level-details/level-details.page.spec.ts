import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelDetailsPage } from './level-details.page';

describe('LevelDetailsPage', () => {
  let component: LevelDetailsPage;
  let fixture: ComponentFixture<LevelDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
