import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({desciption: 'SongPlay'})
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