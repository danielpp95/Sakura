export class Card {
    constructor(cardNameEN, cardNameES, ChapterAnime, ChapterManga, CardNumber, img, type, transformed = null){
        this.cardNameEN = cardNameEN;
        this.cardNameES = cardNameES;
        this.ChapterAnime = ChapterAnime;
        this.ChapterManga = ChapterManga;
        this.CardNumber = CardNumber;
        this.img = img;
        this.type = type;
        this.transformed = transformed;
    }
}