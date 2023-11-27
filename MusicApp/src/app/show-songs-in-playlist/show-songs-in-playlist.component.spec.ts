import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSongsInPlaylistComponent } from './show-songs-in-playlist.component';

describe('ShowSongsInPlaylistComponent', () => {
  let component: ShowSongsInPlaylistComponent;
  let fixture: ComponentFixture<ShowSongsInPlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSongsInPlaylistComponent]
    });
    fixture = TestBed.createComponent(ShowSongsInPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
