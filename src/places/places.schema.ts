import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema()
class Name {
    @Prop() 'en_US': string;
    @Prop() 'uk_UA': string;
    @Prop() 'ru_RU': string;
}

@Schema()
class Description {
    @Prop() 'en_US': string;
    @Prop() 'uk_UA': string;
    @Prop() 'ru_RU': string;
}


@Schema()
export class Place {
    @Prop({required: true})
    _id: string;

    @Prop({required: true})
    name: Name;

    @Prop({required: true})
    description: Description;

    @Prop({required: true})
    address: string;

    @Prop({required: true})
    images: Array<string>;

    @Prop({required: true})
    videos: Array<string>;

    @Prop()
    lat: number;
    @Prop()
    long: number;

    @Prop()
    polygon: Array<Array<number>>

    @Prop()
    date: number;
}

export const PlacesSchema = SchemaFactory.createForClass(Place);
