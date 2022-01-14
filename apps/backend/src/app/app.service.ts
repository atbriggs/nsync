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

  async getSongById(songId: number): Promise<SongPlay> {
    await this.delay(250)
    return this.songsPlayed.find(song => song.songId == songId)
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  getProfileLiked(): SongPlay[] {
    return this.songsPlayed.filter(song => song.liked === true)
  }
}