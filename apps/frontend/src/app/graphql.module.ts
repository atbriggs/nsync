import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {ApolloClient, ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {Apollo, APOLLO_OPTIONS, gql} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';

const uri = 'http://localhost:3333/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  imports: [
    // ... other modules
    HttpClientModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
