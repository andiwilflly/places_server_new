import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IPlace, IPlaceDoc } from './app.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async all(): Promise<IPlaceDoc[]> {
      return await this.appService.all();
  }
}
