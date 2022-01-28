import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Place {
  @Prop({ required: true })
  _id: number;

  @Prop({ required: true })
  name: string;
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
