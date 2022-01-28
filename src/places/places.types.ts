import {Document} from 'mongoose';

export interface IPlace {
    name: string;
    description: string;
    address: string;

    images: Array<string>;
    videos: Array<string>;

    date?: string;
}

export interface IPlaceDoc extends IPlace, Document {
}
