import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SongPlay, SongsResponse } from '@nsync/data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songsSubject:BehaviorSubject<SongPlay[]>=new BehaviorSubject([])
  songs: SongPlay[];

  constructor(private http: HttpClient) { 
    this.fetchSongs();
  }

  fetchSongs(): void {
    this.http.get<SongsResponse>('/songs').subscribe(response => {
     this.songsSubject.next(response.songPlays)
      this.songs = response.songPlays;
    });
  }
}
