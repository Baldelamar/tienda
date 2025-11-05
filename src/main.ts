import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as express from 'express';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get<number>('PORT') || 3001;

// En desarrollo usa origenes especificos; aquí se permite todo para dev
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.use('/public', express.static(join(__dirname, '..', 'public')));

  await app.listen(port);
  console.log(`Servidor escuchando en: http://localhost:${port}`);
}
bootstrap();
