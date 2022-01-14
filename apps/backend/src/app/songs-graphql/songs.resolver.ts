import { NotFoundException, Injectable } from '@nestjs/common';
import { Args, Field, Int, ArgsType, Query, Resolver } from '@nestjs/graphql';
import { SongPlay } from './models/song-play.model';
import { Max, Min } from 'class-validator';
@ArgsType()
export class SongPlayArgs{
  @Field(type => Int)
  @Min(0)
  skip = 0;

  @Field(type => Int)
  @Min(1)
  @Max(50)
  take = 25;
}

@Injectable() export class SongPlayService {
  //@todo add a method to get the song plays from the json database

  findOneById(id: string): Promise<SongPlay> {
    return new Promise((resolve, reject) => ({id} as SongPlay));
  }

  findAll(args: SongPlayArgs): Promise<SongPlay[]> {
    return new Promise((resolve, reject) => ([{}] as SongPlay[])});
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
  songPlays(@Args() songPlayArgs: SongPlayArgs): Promise<SongPlay[]> {
    return this.songPlayService.findAll(songPlayArgs);
  }
}