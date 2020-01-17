import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {LoggingInterceptor} from './common/intercepter/LoggingInterceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['log', 'debug'],
    });

    const options = new DocumentBuilder()
        .setTitle('mysql-orm example')
        .setDescription('The example API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs', app, document);
    console.log('http://localhost:3000/api-docs');

    app.useGlobalInterceptors(new LoggingInterceptor());

    await app.listen(3000);
}

bootstrap();
