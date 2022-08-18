import {Show} from "./show.model";
import {IGenre} from "../interfaces/genre.interface";

export class Movie extends Show{

    constructor(name: string, genre: IGenre, releaseDate: Date,private duration:number) {
        super(name, genre, releaseDate);
    }

    getDuration(): number {
        return this.duration;
    }
}