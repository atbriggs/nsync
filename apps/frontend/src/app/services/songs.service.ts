import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SongDetailResponse, SongPlay, SongsResponse } from '@nsync/data';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songs$: Observable<SongPlay[]> = this.fetchSongs()

  constructor(private http: HttpClient) {
    this.fetchSongs();
  }

  fetchSongs(): Observable<SongPlay[]> {
    return this.http.get<SongsResponse>('/songs').pipe(mergeMap(response => {
      let listOfSongsObservable = response.songPlays.map(song => this.http.get<SongDetailResponse>(`/songs/${song.songId}`))
      return combineLatest([...listOfSongsObservable])
    }),
     map(songDetailsResponse => {
      return songDetailsResponse.map(x => x.songPlay)
    }))
  }


}
