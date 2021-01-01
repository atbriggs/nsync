import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SongPlay, SongsResponse } from "@nsync/data";

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songs: SongPlay[];

  constructor(private http: HttpClient) { 
    this.fetchSongs();
  }

  fetchSongs(): void {
    this.http.get<SongsResponse>('/songs').subscribe(data => {
      Object.keys(data).forEach((key:string) => {
        this.songs = data[key];
      });
    });
  }
}
