import { Controller, Get, Param } from "@nestjs/common";
import { SongDetailResponse, SongPlay, SongsResponse } from "@nsync/data";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("songs")
  getData(): SongsResponse {
    return {
      songPlays: this.appService.getSongsPlayed()
    };
  }

  @Get("profile/liked")
  getProfileLiked(): SongsResponse {
    return {
      songPlays: this.appService.getProfileLiked()
    }
  }

  @Get("songs/:songId")
  async getSongById(@Param() params: {songId: number}): Promise<SongDetailResponse> {
    return {
      songPlay: await this.appService.getSongById(params.songId)
    }
  }
}