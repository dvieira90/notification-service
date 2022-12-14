import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './infra/app.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
