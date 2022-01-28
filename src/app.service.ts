import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IPlace, IPlaceDoc } from './app.types';

@Injectable()
export class AppService {
   constructor(@InjectModel('Place') private placesModel: Model<IPlace>) {}

   async all(): Promise<IPlaceDoc[]> {
      return await this.placesModel.find().exec();
   }
}
