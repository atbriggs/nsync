import { Controller, Get } from "@nestjs/common";
import { SongsResponse } from "@nsync/data";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): SongsResponse {
    return {
      songPlays: this.appService.getSongsPlayed()
    };
  }
}
