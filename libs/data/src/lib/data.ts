export interface SongsResponse {
  [index: string]: SongPlay[];
}

export interface SongPlay {
  endTime: string;
  artistName: string;
  trackName: string;
  msPlayed: number;
}
