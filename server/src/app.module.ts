import {Module} from '@nestjs/common';
import {PersonModule} from './person/person.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://Yehor:Klikled180@family.oddmpbl.mongodb.net/?retryWrites=true&w=majority'),
        PersonModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
