import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {PlacesModule} from "./places/places.module";

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://andiwillfly:ward121314@cluster0-etaet.mongodb.net/placer?retryWrites=true&w=majority',
        ),
        PlacesModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
