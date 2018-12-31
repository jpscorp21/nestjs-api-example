import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './controllers/cats/cats.controller';
import { CatsService } from './services/cats/cats.service';

@Module({
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
