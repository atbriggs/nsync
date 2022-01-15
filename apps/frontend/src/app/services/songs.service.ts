import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SongDetailResponse, SongPlay, SongsResponse } from '@nsync/data';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Apollo, gql } from 'apollo-angular';

const GET_SONG = gql`
  query songs {
    playedSongs {
      trackName,
      artistName,
      songId,
      liked,
      endTime
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songs$: Observable<SongPlay[]> =this.apollo.watchQuery<{playedSongs:SongPlay[]}>({
      query: GET_SONG
    })
    .valueChanges.pipe(map(x =>{

      return[...x.data.playedSongs]
    
    }));

  constructor(private http: HttpClient, private apollo:Apollo) {
    // this.fetchSongs();
  }

  // fetchSongs(): Observable<SongPlay[]> {
  //   return this.http.get<SongsResponse>('/songs').pipe(mergeMap(response => {
  //     let listOfSongsObservable = response.songPlays.map(song => this.http.get<SongDetailResponse>(`/songs/${song.songId}`))
  //     return combineLatest([...listOfSongsObservable])
  //   }),
  //    map(songDetailsResponse => {
  //     return songDetailsResponse.map(x => x.songPlay)
  //   }))
  // }


}
