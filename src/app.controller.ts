import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateCandidateBody } from './dtos/create-candidate-body';

@Controller('/candidates')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('/create-candidate')
  async createCandidate(@Body() body: CreateCandidateBody) {
    const { name, surname, file } = body;

    const candidate = await this.prisma.candidatesData.create({
      data: {
        id: randomUUID(),
        name,
        surname,
        seniority: file.seniority,
        years: file.years,
        availability: file.availability,
      },
    });
    return candidate;
  }

  @Get('/list-candidates')
  async getCandidates(): Promise<any> {
    try {
      const candidates = await this.prisma.candidatesData.findMany();
      return candidates;
    } catch (error) {
      return {
        status: 'error',
        message: 'Something went wrong while fetching candidates.',
        details: error.message,
      };
    }
  }
}
