import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {IPlace, IPlaceDoc} from './places.types';
import * as UUID from 'uuid-int';

@Injectable()
export class PlacesService {
    constructor(@InjectModel('Place') private placesModel: Model<IPlace>) {
    }

    async all(): Promise<IPlaceDoc[]> {
        return await this.placesModel.find().exec();
    }

    async create(place: IPlace): Promise<IPlaceDoc> {
        return await this.placesModel.create({
            ...place,
            _id: UUID(0).uuid(),
        });
    }

    async delete(id: string): Promise<IPlaceDoc> {
        return await this.placesModel.findByIdAndDelete(id).exec();
    }

    async find(id: string) {
        return await this.placesModel.findById(id).exec();
    }

    async update(id: string, place: IPlace): Promise<IPlaceDoc> {
        return await this.placesModel
            .findByIdAndUpdate(id, place, { new: true })
            .exec();
    }

    async deleteAll(
        filters: { [key: string]: string } = {},
    ): Promise<any> {
        return await this.placesModel.deleteMany(filters).exec();
    }
}
