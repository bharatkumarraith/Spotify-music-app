import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSongsComponent } from './view-all-songs.component';

describe('ViewAllSongsComponent', () => {
  let component: ViewAllSongsComponent;
  let fixture: ComponentFixture<ViewAllSongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllSongsComponent]
    });
    fixture = TestBed.createComponent(ViewAllSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
