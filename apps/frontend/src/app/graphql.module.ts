import {NgModule} from '@angular/core';

import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';

const uri = 'http://localhost:3333/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    { import:[ApolloModule],
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: uri
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
