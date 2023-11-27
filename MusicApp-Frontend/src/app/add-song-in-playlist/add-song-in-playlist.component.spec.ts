import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSongInPlaylistComponent } from './add-song-in-playlist.component';

describe('AddSongInPlaylistComponent', () => {
  let component: AddSongInPlaylistComponent;
  let fixture: ComponentFixture<AddSongInPlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSongInPlaylistComponent]
    });
    fixture = TestBed.createComponent(AddSongInPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
