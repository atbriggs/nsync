import { Injectable } from "@nestjs/common";
import songPlays from "../assets/andrews-playlist.json";
import { SongPlay } from "@nsync/data";

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
