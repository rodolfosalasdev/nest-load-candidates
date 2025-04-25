import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { CreateCandidateRepository } from './repositories/create-candidate.repository';
import { PrismaCreateCandidateRepository } from './repositories/prisma/prisma-create-candidate.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: CreateCandidateRepository,
      useClass: PrismaCreateCandidateRepository,
    },
  ],
})
export class AppModule {}
