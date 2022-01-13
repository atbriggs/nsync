import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { SongsGraphqlModule } from "./songs-graphql/songs-graphql.module";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { join } from 'path';

@Module({
  imports: [
    SongsGraphqlModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'apps/backend/src/app/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
