import {User} from "./user";
import {Card} from "./card";
/**
 * Created by Seger on 13/03/2017.
 */
export class Session {
    id: string;
    title: string;
    description: string;
    circleType: string;
    minCardsPerParticipant: string;
    maxCardsPerParticipant: string;
    cards: Card[];
    cardsCanBeReviewed: boolean;
    cardsCanBeAdded: boolean;
    participants: User[];
    themeId: string;
    creator: string;
    callback: string;
    startDate: string;
    endDate: Date;
    amountOfCircles: number;
    turnDuration: number;
}
