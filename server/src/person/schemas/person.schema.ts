import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type DocumentPerson = HydratedDocument<Person>;

interface IEvent {
    date: Date;
    place: string;
    mapLink: string;
}

interface IRelative {
  _id: string;
    fullName: string;
}

@Schema()
export class Person {
    @Prop()
    fullName: string;

    @Prop()
    biography: string;

    @Prop()
    birth: IEvent;

    @Prop()
    death: IEvent;

    @Prop()
    parents: IRelative[];

    @Prop()
    siblings: IRelative[];

    @Prop()
    spouse: {
        exes: IRelative[];
        current: IRelative;
    };

    @Prop()
    children: IRelative[];
}

export const PersonSchema = SchemaFactory.createForClass(Person);
