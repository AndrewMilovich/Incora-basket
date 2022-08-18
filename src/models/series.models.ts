import {IGenre} from "../interfaces/genre.interface";
import {Episode} from "./episode.model";
import {Show} from "./show.model";


export class Series extends Show {


    constructor(name: string, genre: IGenre, releaseDate: Date, public episodes: Episode[], private duration: number) {
        super(name, genre, releaseDate);
    }

    getDuration(): number {
        return this.duration;
    }
}