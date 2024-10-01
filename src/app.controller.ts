import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateCandidateBody } from './dtos/create-candidate-body';
import { CreateCandidateRepository } from './repositories/create-candidate.repository';

@Controller('/candidates')
export class AppController {
  constructor(
    private createCandidateRepository: CreateCandidateRepository,
    private prisma: PrismaService,
  ) {}

  @Post('/create-candidate')
  async createCandidate(@Body() body: CreateCandidateBody) {
    const { name, surname, file } = body;

    await this.createCandidateRepository.create(name, surname, file);

    // const candidate = await this.prisma.candidatesData.create({
    //   data: {
    //     id: randomUUID(),
    //     name,
    //     surname,
    //     seniority: file.seniority,
    //     years: file.years,
    //     availability: file.availability,
    //   },
    // });
    // return candidate;
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
