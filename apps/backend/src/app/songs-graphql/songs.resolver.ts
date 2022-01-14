import { NotFoundException, Injectable } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { RecipesService } from './recipes.service';
import { SongPlay } from './models/song-play.model';

const pubSub = new PubSub();

@Injectable() export class SongPlayService {
  //@todo add a method to get the song plays from the json database

  findOneById(id: string): Promise<SongPlay> {
    return new Promise({resolve: () => ({} as SongPlay)});
  }

  findAll(args: SongPlayArgs): Promise<SongPlay[]> {
    return new Promise((resolve, reject) => ([{}] as SongPlay[]));
  }

}


@Resolver(of => SongPlay)
export class SongPlayResolver {
  constructor(private readonly songPlayService: SongPlayService) {}

  //@todo Find By ID may not be feasible, but findOneByName() can be used
  @Query(returns => SongPlay)
  async songPlay(@Args('id') id: string): Promise<SongPlay> {
    const songPlay = await this.songPlayService.findOneById(id);
    if (!songPlay) {
      throw new NotFoundException(id);
    }
    return songPlay;
  }

  @Query(returns => [SongPlay])
  songPlays(@Args() recipesArgs: SongPlayArgs): Promise<SongPlay[]> {
    return this.songPlayService.findAll(recipesArgs);
  }

  @Mutation(returns => SongPlay)
  async addRecipe(
    @Args('newRecipeData') newRecipeData: NewRecipeInput,
  ): Promise<SongPlay> {
    const recipe = await this.songPlayService.create(newRecipeData);
    pubSub.publish('recipeAdded', { recipeAdded: recipe });
    return recipe;
  }

  @Mutation(returns => Boolean)
  async removeRecipe(@Args('id') id: string) {
    return this.songPlayService.remove(id);
  }

  @Subscription(returns => SongPlay)
  recipeAdded() {
    return pubSub.asyncIterator('recipeAdded');
  }
}