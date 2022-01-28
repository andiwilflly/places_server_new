import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaceSchema } from './app.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
      MongooseModule.forRoot(
          'mongodb+srv://andiwillfly:ward121314@cluster0-etaet.mongodb.net/placer?retryWrites=true&w=majority',
      ),
      MongooseModule.forFeature([{ name: 'Place', schema: PlaceSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
