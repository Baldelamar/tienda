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
    origin: ['http://localhost:5173', 'http://localhost:5174'], // tus posibles puertos de front
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  app.use('/public', express.static(join(__dirname, '..', 'public')));

  await app.listen(port);
  console.log(`Servidor escuchando en: http://localhost:${port}`);
}
bootstrap();
