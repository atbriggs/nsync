import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'song-play ' })
export class SongPlay {
  @Field(type => ID)
  id: string;

  @Field()
  trackName: string;

  @Field()
  artistName: string;

  @Field()
  endTime: Date;
  
  @Field()
  msPlayed: number;
}