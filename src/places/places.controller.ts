import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseFilters,
} from '@nestjs/common';
import { PlacesService } from './places.service';
import {IPlace, IPlaceDoc} from './places.types';
import AllExceptionsFilter from '../all-exception.filter';

@Controller('places')
export class PlacesController {
    constructor(private readonly placesService: PlacesService) {
    }

    @UseFilters(new AllExceptionsFilter())
    @Get()
    async all(): Promise<IPlaceDoc[]> {
        return await this.placesService.all();
    }

    @UseFilters(new AllExceptionsFilter())
    @Post()
    async create(@Body() task: IPlace): Promise<IPlaceDoc> {
        return await this.placesService.create(task);
    }

    @UseFilters(new AllExceptionsFilter())
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<IPlaceDoc> {
        return await this.placesService.delete(id);
    }

    @UseFilters(new AllExceptionsFilter())
    @Get(':id')
    async find(@Param('id') id: string): Promise<IPlaceDoc> {
        return await this.placesService.find(id);
    }

    @UseFilters(new AllExceptionsFilter())
    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() task: IPlace,
    ): Promise<IPlaceDoc> {
        return await this.placesService.update(id, task);
    }

    @UseFilters(new AllExceptionsFilter())
    @Delete()
    async deleteAll(
        @Param('filters') filters: { [key: string]: string },
    ): Promise<{ ok?: number; n?: number }> {
        return await this.placesService.deleteAll(filters);
    }
}
