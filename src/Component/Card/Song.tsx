import React, {useState, useEffect, FC} from "react";
import { SongDeets } from "../App/App";
interface SongProps {
    song: SongDeets
}
export const Song: FC<SongProps> = (props: SongProps) => {
    return (
        <div>
            <img src={props.song.albumCover} alt={props.song.albumTitle} />
            <h3>{props.song.albumTitle}</h3>
        </div>
    )
}