export class CustomApod {
    copyright: string;
    date: string;
    explanation: string;
    title: string;
    imageUrl: string;

    constructor(copyright, date, explanation, title, imageUrl) {
        this.copyright = copyright;
        this.date = date;
        this.explanation = explanation;
        this.title = title;
        this.imageUrl = imageUrl;
    }
}
