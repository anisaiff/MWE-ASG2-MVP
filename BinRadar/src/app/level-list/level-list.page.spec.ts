import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelListPage } from './level-list.page';

describe('LevelListPage', () => {
  let component: LevelListPage;
  let fixture: ComponentFixture<LevelListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
