import {Controller, Get} from '@nestjs/common';
import {HeroesService} from '../heroes/heroes.service';
import {PhotoService} from './photo.service';
import {Photo} from './photo.entity';
import {ApiTags} from '@nestjs/swagger';

@Controller('photo')
@ApiTags('Photo')
export class PhotoController {
    constructor(public service: PhotoService) {
    }

    @Get()
    async findByCondition(): Promise<Photo[]> {
        return this.service.findByCondition();
    }
}
