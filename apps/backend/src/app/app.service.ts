import { Injectable } from "@nestjs/common";
import * as songPlays from "../assets/andrews-playlist.json";
import {SongPlay} from "../types/song-play";

@Injectable()
export class AppService {
  private songsPlayed: SongPlay[];

  constructor() {
    this.songsPlayed = songPlays;
  }

  getSongsPlayed(): SongPlay[] {
    return this.songsPlayed;
  }
}
