import {Card} from "./card";
import {User} from "./user";

export class Theme {
    _id: string;
    title: string;
    description: string;
    tags: string;
    publicAccess: boolean;
    cards: Card[];
    organisers: User[];
    created: Date;
}
