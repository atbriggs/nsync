# Nsync

## Development server

Run `npm run start:frontend` to start the front end. Navigate to http://localhost:4200/.

Run `npm run start:backend` to start the back end. Navigate to http://localhost:3333/api for the base path. 

## Development Database

Run `npm run build:database` to build the database image and send it to Docker.

Run `npm run run:database` to run the database on port `3306`.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## How this repo was built

1. Ran `npx create-nx-workspace --preset=angular` to build the base Nx repo with an Angular app
2. Provided the following options: 
- `Workspace name (e.g., org name)     nsync`
- `Application name                    its-gonna-be-fe`
- `Default stylesheet format           SASS(.scss)  [ http://sass-lang.com   ]`
- `Default linter                      ESLint [ Modern linting tool ]`
- `Use Nx Cloud? (It's free and doesn't require registration.) No`
3. Ran `npm install --save-dev @nrwl/nest` to add NestJS support
4. Ran `npx nx g @nrwl/nest:app i-want-you-backend --frontendProject=its-gonna-be-fe` to generate the back end app
