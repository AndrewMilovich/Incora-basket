import {Show} from "./show.model";
import {IGenre} from "../interfaces/genre.interface";


export class Episode extends Show{

    constructor(name: string, genres: IGenre, releaseDate: Date,private duration:number) {
        super(name, genres, releaseDate);
    }

    getDuration(): number {
        return this.duration;
    }
}