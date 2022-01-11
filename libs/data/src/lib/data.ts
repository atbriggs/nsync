export interface SongsResponse {
  songPlays: SongPlay[];
}

export interface SongDetailResponse {
  songPlay: SongPlay;
}

export interface SongPlay {
  songId: number;
  endTime: string;
  artistName: string;
  trackName: string;
  msPlayed: number;
  liked: boolean;
}
