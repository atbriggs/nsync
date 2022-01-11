import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
<<<<<<< HEAD
import { SongsGraphqlModule } from "./songs-graphql/songs-graphql.module";
=======
>>>>>>> add graphql library

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { join } from 'path';

@Module({
  imports: [
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
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
