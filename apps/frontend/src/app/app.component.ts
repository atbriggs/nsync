import { Component } from '@angular/core';
import { SongsService } from './services/songs.service';

@Component({
  selector: 'nsync-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';

  constructor(private songService: SongsService) { }

  getSongs() {
    return this.songService.songs;
  }
}
