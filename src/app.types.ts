import { Document } from 'mongoose';

export interface IPlace {
  name: string;
}

export interface IPlaceDoc extends IPlace, Document {}