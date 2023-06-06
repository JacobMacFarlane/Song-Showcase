type songCard = {
    id: number
    title: string
    album: {
        title: string
        cover: string
    }
    artist: {
        id: number
        name: string
    }
    rank: number
}

export const getCleanData = (songs: songCard[]) => {
    return songs.map((song) => {
      return {
        id: song.id,
        title: song.title,
        albumTitle: song.album.title,
        albumCover: song.album.cover,
        artistId: song.artist.id,
        artistName: song.artist.name,
        rank: song.rank,
      };
    });
  };