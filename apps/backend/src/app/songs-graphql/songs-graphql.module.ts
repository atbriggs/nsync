import { Module } from '@nestjs/common';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';
import { SongPlayResolver, SongPlayService } from './songs.resolver';

@Module({
    providers: [
        // RecipesResolver, 
        // RecipesService, 
        SongPlayResolver, 
        SongPlayService],
})
export class SongsGraphqlModule {}
