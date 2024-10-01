import { PrismaService } from 'src/database/prisma.service';
import { CreateCandidateRepository } from '../create-candidate.repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCreateCandidateRepository
  implements CreateCandidateRepository
{
  constructor(private prisma: PrismaService) {}

  async create(name: string, surname: string, file: any): Promise<void> {
    await this.prisma.candidatesData.create({
      data: {
        id: randomUUID(),
        name,
        surname,
        seniority: file.seniority,
        years: file.years,
        availability: file.availability,
      },
    });
  }
}
