import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
<<<<<<< HEAD
<<<<<<< HEAD
import { SongsGraphqlModule } from "./songs-graphql/songs-graphql.module";
=======
>>>>>>> add graphql library
=======
import { SongsGraphqlModule } from "./songs-graphql/songs-graphql.module";
>>>>>>> Add graphql integration

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { join } from 'path';

@Module({
  imports: [
<<<<<<< HEAD
<<<<<<< HEAD
    SongsGraphqlModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'apps/backend/src/app/schema.gql'),
      sortSchema: true,
=======
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts')
      }
>>>>>>> add graphql library
=======
    SongsGraphqlModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'apps/backend/src/app/schema.gql'),
      sortSchema: true,
>>>>>>> Add graphql integration
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
