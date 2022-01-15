import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SongDetailResponse, SongPlay, SongsResponse } from '@nsync/data';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, mergeMap, pluck, switchMap } from 'rxjs/operators';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { ApolloQueryResult } from '@apollo/client/core';
import { variable } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songs$: Observable<SongPlay[]> = this.fetchSongs()
  songsGraphQl$: Observable<any> =   this.apollo
  .query<SongPlay[]>({
    query: gql`
    {
      songs {
        playedSongs {
          trackName,
           artistName,
           songId,
           liked
        }
      }
    }
  `
  }).pipe(map(x=> x.data))
  constructor(private http: HttpClient,private apollo: Apollo) {
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
