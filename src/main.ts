import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.NEST_PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
}
bootstrap();
