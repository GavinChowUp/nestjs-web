import {Controller} from '@nestjs/common';
import {Crud} from '@nestjsx/crud';
import {Hero} from './hero.entity';
import {HeroesService} from './heroes.service';
import {ApiTags} from '@nestjs/swagger';

@Crud({
    model: {
        type: Hero,
    },
})
@Controller('heroes')
@ApiTags('Hero')
export class HeroesController {
    constructor(public service: HeroesService) {
    }
}
