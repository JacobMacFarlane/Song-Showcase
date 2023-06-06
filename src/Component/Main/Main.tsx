import React, {useState, useEffect, FC} from "react";
import { SongDeets } from "../App/App";
import { Song } from "../Card/Song";

interface MainProps {
    data: SongDeets[];
}

export const Main: FC<MainProps> = (props: MainProps) => {
const songs = props.data.map((song) => {
    return <Song key={song.id} song={song} />
})
    return (
        <div>
            <p>
               {songs}
            </p>
        </div>
    )
}