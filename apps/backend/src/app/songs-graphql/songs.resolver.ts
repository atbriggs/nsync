import { NotFoundException, Injectable } from '@nestjs/common';
import { Args, Field, Int, ArgsType, Query, Resolver } from '@nestjs/graphql';
import { SongPlay } from './models/song-play.model';
import { Max, Min } from 'class-validator';
import { AppService } from '../app.service';

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



@Resolver(of => SongPlay)
export class SongPlayResolver {
  constructor(private readonly songPlayService: AppService) {}

  //@todo Find By ID may not be feasible, but findOneByName() can be used
  @Query(returns => SongPlay)
  async songById(@Args('id') id: number): Promise<SongPlay> {
    const songPlay = await this.songPlayService.getSongById(id);
    if (!songPlay) {
      throw new NotFoundException(id);
    }
    return songPlay;
  }

  @Query(returns => [SongPlay])
  async playedSongs(): Promise<SongPlay[]> {
    const songsPlayed = await this.songPlayService.getSongsPlayed();
    return songsPlayed;
  }

  @Query(returns => [SongPlay])
  async likedSongs(): Promise<SongPlay[]> {
    const songsPlayed = await this.songPlayService.getProfileLiked();
    return songsPlayed;
  }
}