import { Injectable } from '@nestjs/common';

// they interact with the database

@Injectable()
export class SongsService {
    // local db array

    private readonly songs = [];

    createSong(song) {

        // save the song into the database
        this.songs.push(song);
        console.log("Adding song")
        return this.songs;
    }

    findAll() {
        // fetch the song from the database
        console.log("Fetching songs")

        // Errors comes while fetching ythe data from the database
        throw new Error("Error in DB while fetching the records")
        return this.songs;
    }
}
