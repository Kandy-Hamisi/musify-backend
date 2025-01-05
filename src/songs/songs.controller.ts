import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {

    constructor(private songsService: SongsService) {}

    @Post()
    createSong(@Body() CreateSongDTO: CreateSongDTO) {
        return this.songsService.createSong(CreateSongDTO)
        console.log("This creates new song")
    }

    @Get()
    findAll() {
        try {
            return this.songsService.findAll();
        } catch(e) {
            throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: e
            })
        }
    }

    @Get(':id')
    findOne() {
        return 'This action returns a single song with id';
    }

    @Put(':id')
    updateSong() {
        return 'This action updates a single song with id.';
    }

    @Delete(':id')
    deleteSong() {
        return 'This action deletes a single song with id.';
    }
}