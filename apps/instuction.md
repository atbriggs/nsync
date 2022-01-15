

1. run ng add apollo-angular
2. use  http://localhost:3333/graphql as endpoint
3. add this in service:

songs$: Observable<SongPlay[]> =this.apollo.watchQuery<{playedSongs:SongPlay[]}>({
      query: GET_SONG
    })
    .valueChanges.pipe(map(x =>{

      return[...x.data.playedSongs]
    
    }));

  constructor(private http: HttpClient, private apollo:Apollo) {
    // this.fetchSongs();
  }


  you need to use node v12.19.0 