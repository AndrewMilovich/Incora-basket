import {FC} from "react";
import {Show} from "../../models/show.model";

interface IProps {
    show: Show;
}

const ShowTv: FC<IProps> = ({show}) => {
    return (
        <div>
            {show.name} -- {show.releaseDate.getFullYear()} -- {show.genre.name} -- {show.getDuration()}
        </div>
    );
};

export {ShowTv};