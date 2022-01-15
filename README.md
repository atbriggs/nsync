# Give yourself a REST with GraphQL
In this workshop, we'll be using technologies typical in RBC Digital to explore our friend's musical preferences. Our data comes from "Andrew's top 2020 Spotify Playlist", and we've created an Angular App to display some interesting info about his tunes. While there are a lot of things going on in this reposotiry, today's workshop will focus on implementing GraphQL to query Andrew's song data. Feel free to explore the code, you might find some interesting surprises!

## Pre-requisites

- Node - Instructions to install can be found here: _[How to install `nodejs`](https://nodejs.dev/learn/how-to-install-nodejs)_ 
- This project was tested with [`nodejs` version 12.19.0](https://nodejs.org/en/download/releases/)
- ***(Optional)*** Use `nvm` to manage `nodejs` versions: _[How to install and manage `nvm`](https://github.com/nvm-sh/nvm#installing-and-updating)_

## To run the apps

### Getting the source code

To get started, it is required to have a copy of this code running on development environment of choice.

- Navigate to the directory of choice
- Clone this repository using command provided below
- Optional step: choose the `nodejs` version 
- Install required packages 

```shell
    git clone https://github.com/atbriggs/nsync
    cd nsync 
    nvm use
    npm i 
```

### Running the frontend 

To make the frontend code accessible in the browser: 

- Launch the command line terminal of choice
- Navigate to the project's root directory
- To start the frontend, type in the terminal the following command `npm run start:frontend`
- The `nodejs` frontend server will available on the URL: [http://localhost:4200/](http://localhost:4200/)

> The ***root directory***, is the top level directory(folder) the project is located, on the development environment of choice.

### Running the backend 

To make the backend code available to the frontend calls, follow the following steps 

- Using a second tab on the terminal of choice
- Navigate to the project's root directory
- To make backend capable of answering frontend calls, type in the second tab the following command `npm run start:backend`
- For testing sakes, navigate to [http://localhost:3333/songs](http://localhost:3333/songs) for the base path
- The backend will be ready, if the list of songs is displayed as a JSON feed
- Other Endpoints include:
```
/profile/liked - Returns a list of liked songs from the prolfile
/songs/:songid - Returns Song details based on the queried id
```

> ***[JSON](https://www.json.org/json-en.html)*** is a data representation widely adopted for ***[REST](https://en.wikipedia.org/wiki/Representational_state_transfer)*** APIs

> The above commands can be slightly different from one operating system, to another. However, the end-result should be the same across the board.

## GraphQL and Angular
Some resources to look at:
- [Apollo Angular GraphQL client](https://apollo-angular.com/docs/get-started)
- [Resources for Angular + GraphQL By Hasura](https://github.com/hasura/awesome-angular-graphql)
- [Hasura's GraphQL + Angular course](https://hasura.io/learn/graphql/angular-apollo/introduction/)

## How this repo was built

1. Ran `npx create-nx-workspace --preset=angular` to build the base Nx repo with an Angular app
2. Provided the following options:
    - `Workspace name (e.g., org name)     nsync`
    - `Application name                    frontend`
    - `Default stylesheet format           SASS(.scss)  [ http://sass-lang.com   ]`
    - `Default linter                      ESLint [ Modern linting tool ]`
    - `Use Nx Cloud? (It's free and doesn't require registration.) No`
3. Ran `npm install --save-dev @nrwl/nest` to add NestJS support
4. Ran `npx nx g @nrwl/nest:app backend --frontendProject=frontend` to generate the back end app

More in depth instructions about what was done can be found through the Nx tutorials _[link](https://nx.dev/latest/angular/tutorial/01-create-application)_ 

Andrew's top 2020 Spotify Playlist: [https://open.spotify.com/playlist/37i9dQZF1EMfrw1RJpCrws?si=R3LSkXohQiC76G62w12f5A](https://open.spotify.com/playlist/37i9dQZF1EMfrw1RJpCrws?si=R3LSkXohQiC76G62w12f5A)


# Workshop
Now that your frontend and backend are up and running, it’s time to have some fun! You’ll notice that the backend code is currently using REST to query song data. The goal of this workshop is to replace those REST calls with GraphQL, so that we can use GraphQL to query Spotify songs.

## Deliverables
   1. Run a GraphQL service
   2. Edit the songs service to query the data using GraphQL
   3. Compare the REST implementation to your GraphQL one - which one do you prefer?
   4. Have some fun, is there an improvement you’d like to try to the front end/back end?
   5. Explore, is there anything in the code that you particularly like?
   6. Andrew loves validation, which of the songs do you like? Feel free to share it in Discord

### How to Switch to GraphQL

Add Apollo: `ng add apollo-angular`

Say yes to run the command that was recommended instead: `npm install apollo-angular && npx nx g apollo-angular:ng-add`

When it asks for the URL to the GraphQL service put in `http://localhost:3333/graphql`

Modify `apps/frontend/src/app/services/songs.service.ts` to have the GraphQL service instead:
```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SongPlay } from '@nsync/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  constructor(private http: HttpClient, private apollo:Apollo) { }

}
```