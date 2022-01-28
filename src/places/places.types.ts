import {Document} from 'mongoose';

interface IName {
    'en_US'?: string;
    'uk_UA'?: string;
    'ru_RU'?: string;
}
interface IDescription {
    'en_US'?: string;
    'uk_UA'?: string;
    'ru_RU'?: string;
}

export interface IPlace {
    name: IName;
    description: IDescription;
    address: string;

    images: Array<string>;
    videos: Array<string>;

    lat?: number;
    long?: number;
    polygon?: Array<Array<number>>

    date?: number;
}

export interface IPlaceDoc extends IPlace, Document {
}
