import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserConfigPage } from './user-config.page';

describe('UserConfigPage', () => {
  let component: UserConfigPage;
  let fixture: ComponentFixture<UserConfigPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
