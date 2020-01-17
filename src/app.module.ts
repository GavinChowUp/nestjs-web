import {Module} from '@nestjs/common';
import {HeroesModule} from './module/heroes/heroes.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PhotoModule} from './module/photo/photo.module';
import {LoggingInterceptor} from './common/intercepter/LoggingInterceptor';
import {APP_INTERCEPTOR} from '@nestjs/core';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        HeroesModule,
        PhotoModule,
    ],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor,
        },
    ],
})
export class AppModule {
}
