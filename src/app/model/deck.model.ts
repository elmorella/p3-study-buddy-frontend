import { Card } from 'src/app/model/card.model'

export class Deck {
    deckId?: number
    title?: String
    subject?: String
    description?: String
    cardSet: Array<Card> = []
}