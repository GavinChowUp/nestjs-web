import {Injectable, Inject} from '@nestjs/common';
import {Repository} from 'typeorm';
import {Photo} from './photo.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>,
    ) {}

    async findByCondition(): Promise<Photo[]> {
        return await this.photoRepository.query('select * from photo where id > 5');
    }
}
