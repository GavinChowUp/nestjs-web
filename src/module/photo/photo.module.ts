import {Module} from '@nestjs/common';
import {PhotoController} from './photo.controller';
import {PhotoService} from './photo.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Photo} from './photo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Photo])],
    providers: [PhotoService],
    controllers: [PhotoController],
})
export class PhotoModule {
}
