export interface SongsResponse {
  songPlays: SongPlay[];
}

export interface SongPlay {
  endTime: string;
  artistName: string;
  trackName: string;
  msPlayed: number;
}
