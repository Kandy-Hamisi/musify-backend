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
        return this.songs;
    }
}
