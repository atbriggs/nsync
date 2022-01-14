import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'song-play ' })
export class SongPlay {
  @Field(type => ID)
  songId: number;

  @Field()
  trackName: string;

  @Field()
  artistName: string;

  @Field()
  endTime: string;
  
  @Field()
  msPlayed: number;

  @Field()
  liked: boolean;
}