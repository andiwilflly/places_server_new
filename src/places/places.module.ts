import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { PlacesSchema } from './places.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Place', schema: PlacesSchema }])],
    controllers: [PlacesController],
    providers: [PlacesService],
    exports: [PlacesService],
})
export class PlacesModule {}
