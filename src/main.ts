import { NestFactory } from '@nestjs/core';
import { RootModule } from './modules/root/root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
