import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Place {
    @Prop({ required: true })
    _id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;


    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    images: Array<string>;

    @Prop({ required: true })
    videos: Array<string>;

    @Prop()
    date: string;
}

export const PlacesSchema = SchemaFactory.createForClass(Place);
