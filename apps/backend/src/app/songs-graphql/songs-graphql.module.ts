import { Module } from '@nestjs/common';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';
import { SongPlayResolver } from './songs.resolver';
import { AppService } from '../app.service';

@Module({
    providers: [
        // RecipesResolver, 
        // RecipesService, 
        SongPlayResolver,
        AppService
    ],
})
export class SongsGraphqlModule {}
