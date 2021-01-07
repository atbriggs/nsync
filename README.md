# Nsync

## Pre-requisites

- Node - Instructions to install can be found here: https://nodejs.dev/learn/how-to-install-nodejs (This was tested with version 12.19.0)
- Clone this repo to your local computer
- Navigate to the main folder in a terminal and use command `npm i` to install needed packages

## To run the apps

- Navigate to the main folder and type command `npm run start:frontend` to start the front end. Navigate to http://localhost:4200/
- Navigate to the main folder and type command `npm run start:backend` to start the back end. Navigate to http://localhost:3333/songs for the base path

## The Challenges

### Back end
1. Modify the current endpoint to return seconds played instead of milliseconds
1. Add a `/songs/greatestSongOfAllTime` endpoint that returns the string `Kiss from a Rose by Seal`. In general you wouldn't hard-code data but this is a universal truth so we're safe to break that rule here. 
1. Add another endpoint to only return songs that were actually listened to (i.e. `/songs/listened`)
1. Add a query parameter to one of the endpoints so that we can request only a certain band's songs be returned (i.e. `/songs?band=Spice%20Girls`)
1. This may take a few days/weeks but you can request and download your own Spotify data and use that instead of `andrews-playlist.json`: https://www.spotify.com/ca-en/account/privacy/ (we're using a subset of my `StreamingHistory0.json` file)

### Front end
1. Remove the End Time column from the table
1. Change it so that the data is pulled from the `/songs/listened` endpoint instead of `/songs` in `songs.service.ts` if you did the corresponding Back End challenge
1. Make a new section on the page that shows which song was listened to multipl times
1. Make a new section on the page that shows the bands in order of how many of their songs were played

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

More in depth instructions about what was done can be found through the Nx tutorials: https://nx.dev/latest/angular/tutorial/01-create-application