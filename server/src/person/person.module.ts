import {Module} from '@nestjs/common';
import {PersonService} from './person.service';
import {PersonController} from './person.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Person, PersonSchema} from './schemas/person.schema';

@Module({
    controllers: [PersonController],
    providers: [PersonService],
    imports: [
        MongooseModule.forFeature([
            {
                name: Person.name,
                schema: PersonSchema,
            },
        ]),
    ],
})
export class PersonModule {
}
