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

  getProfileLiked(): SongPlay[] {
    return this.songsPlayed.filter(song => song.liked === true)
  }

  getSongById(songId: number): SongPlay {
    return this.songsPlayed.find(song => song.songId == songId)
  }

}
